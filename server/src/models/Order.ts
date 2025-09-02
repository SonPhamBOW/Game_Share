import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        accountId: { type: mongoose.Schema.Types.ObjectId, ref: "GameAccount" },
        price: Number,
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["momo", "vnpay", "paypal", "cod"] },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    discount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
