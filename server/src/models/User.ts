import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: String,
    coupons: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Coupon", required: true },
    ],
    location: {
      city: String,
      country: String,
    },
  },
  { timestamps: true }
);
