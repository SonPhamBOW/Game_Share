import mongoose from "mongoose";

const discountTicketSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true }, // ví dụ: "SALE50"
    description: { type: String },

    discountType: { 
      type: String, 
      enum: ["percentage", "fixed"], 
      required: true 
    }, 
    discountValue: { type: Number, required: true }, 
    minOrderValue: { type: Number, default: 0 }, // điều kiện tối thiểu đơn hàng
    maxDiscount: { type: Number }, // giới hạn giảm tối đa (khi dùng %)

    usageLimit: { type: Number, default: 1 }, // số lần dùng tối đa
    usedCount: { type: Number, default: 0 },   // đã dùng bao nhiêu lần

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    // nếu có thì chỉ user này dùng được, còn null = public

    startDate: { type: Date, required: true }, 
    endDate: { type: Date, required: true },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("DiscountTicket", discountTicketSchema);
