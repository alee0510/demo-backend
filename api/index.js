import express from "express";
import { createServerlessExpress } from "@vendia/serverless-express";

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

// Export as Vercel handler
export default createServerlessExpress({ app });
