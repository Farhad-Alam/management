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

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  })
}

export { app };
