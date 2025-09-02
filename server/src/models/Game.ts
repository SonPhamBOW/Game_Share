import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true }, 
    slug: { type: String, unique: true }, 
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }], 
    thumbnail: { type: String },
    coverImage: [String],
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Game", gameSchema);
