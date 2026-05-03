export async function sendContactEmail(fields) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  if (res.status === 429) throw new Error("rate_limited");
  if (!res.ok) throw new Error("send_failed");
  return res.json();
}
