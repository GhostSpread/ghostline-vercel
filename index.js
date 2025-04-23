export default async function handler(req, res) {
  const payload = {
    timestamp: new Date().toISOString(),
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    method: req.method,
    path: req.url,
    userAgent: req.headers["user-agent"],
    payload: req.body,
  };

  console.log("👻 Ghostline Hit:", JSON.stringify(payload, null, 2));

  // Send to Zapier (replace with your actual Zapier URL)
  await fetch("https://hooks.zapier.com/hooks/catch/xxxxxx/yyyyyy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  res.status(200).json({ message: "👻 Ghostline received your data." });
}