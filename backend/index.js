import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoute.js";
import path from "path";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.log(`Error Connecting to Database ${error}`));

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
