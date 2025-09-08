export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      message: "Welcome to the API!",
      endpoints: {
        "/api": "This endpoint",
        "/api/hello": "Hello endpoint",
      },
    });
  }

  res.status(405).json({ error: "Method not allowed" });
}
