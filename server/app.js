import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Data from "./routes/DataRoute.js";

const app = express();

// Env file
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "server/config/config.env" });
}

// middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is backend");
});

// importing routes
app.use("/api/v1", Data);

export { app };
