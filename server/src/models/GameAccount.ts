import mongoose from "mongoose";

const gameAccountSchema = new mongoose.Schema(
  {
    platform: { type: String, enum: ["steam"], default: "steam" },
    accountEmail: { type: String, required: true },
    accountPassword: { type: String, required: true },

    games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],

    status: {
      type: String,
      enum: ["available", "sold", "banned", "pending"],
      default: "pending",
    },

    description: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("GameAccount", gameAccountSchema);
