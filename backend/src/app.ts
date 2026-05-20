import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL || "http://localhost:3000",
      "http://localhost:3000",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(bodyParser.json());


app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "backend",
    timestamp: new Date().toISOString(),
  });
});


app.use("/api", taskRoutes);

export default app;