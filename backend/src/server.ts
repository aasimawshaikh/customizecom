import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();
const port = Number(process.env.PORT ?? 4000);
const webOrigin = process.env.WEB_ORIGIN ?? "http://localhost:5173";

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: webOrigin.split(",").map((origin) => origin.trim()) }));
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "customizecom-api",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/v1", (_req, res) => {
  res.status(200).json({
    name: "CustomizeCom API",
    version: "v1",
    status: "scaffold",
  });
});

app.listen(port, () => {
  console.info(`CustomizeCom API listening on port ${port}`);
});
