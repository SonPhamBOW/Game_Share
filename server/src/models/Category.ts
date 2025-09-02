import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    slug: { type: String, unique: true }, // "horror", "action" (SEO friendly)
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
