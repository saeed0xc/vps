
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  planType: { type: String, enum: ["custom", "basic", "pro", "enterprise"], required: true },
  cpuCores: { type: Number },
  ram: { type: Number }, // in GB
  disk: { type: Number }, // in GB
  duration: { type: String, enum: ["monthly", "yearly"], required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["pending", "paid"], default: "pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
