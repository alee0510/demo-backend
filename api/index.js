import express from "express";
import { createServerlessExpress } from "@vendia/serverless-express";

const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Export as Vercel handler
export default createServerlessExpress({ app });
