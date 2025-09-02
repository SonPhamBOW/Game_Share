import mongoose from "mongoose";

const accountAmountSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GameAccount",
    required: true,
  },

  users: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      boughtAt: { type: Date, default: Date.now },
    },
  ],

  maxUsers: { type: Number, default: 5 }, // giới hạn số người
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AccountAmount", accountAmountSchema);
