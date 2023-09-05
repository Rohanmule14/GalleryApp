import express from "express";
import cors from "cors";
const app = express();
import galleryRoutes from "./routes/galleryRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/v1", galleryRoutes);
app.use(express.static("public/upload"));
connectDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});
