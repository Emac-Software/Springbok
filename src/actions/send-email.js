export async function sendContactEmail(fields) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fields),
  });

  if (!res.ok) {
    // const d = await res.json();
    // console.log(d.message);
    throw new Error("Send failed");
  }
  return res.json();
}
