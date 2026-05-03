import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, "1 h"),
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const ip = req.headers["x-forwarded-for"]?.split(",")[0] ?? "unknown";
    console.error("Rate limit IP:", ip);
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return res.status(429).json({ error: "Too many requests" });
    }

    const { name, businessName, role, email, message } = req.body;

    const { error } = await resend.emails.send({
      from: "contact@springbokmedia.com",
      to: "jakeryandesign@outlook.com",
      replyTo: email,
      subject: `New inquiry from ${name} — ${businessName}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Club / Business:</strong> ${businessName}</p>
        <p><strong>Role:</strong> ${role || "—"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return res.status(500).json({ error: "Failed to send" });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
}
