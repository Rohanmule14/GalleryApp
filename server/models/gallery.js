import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  name: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});

const gallery = new mongoose.model("gallery", gallerySchema);

export default gallery;
