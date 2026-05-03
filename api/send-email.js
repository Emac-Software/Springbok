import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, businessName, role, email, message } = req.body;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ethan.mcfarland@mail.utoronto.ca",
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
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send" });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error("Handler error:", e);
    return res.status(500).json({ error: "Server error" });
  }
}
