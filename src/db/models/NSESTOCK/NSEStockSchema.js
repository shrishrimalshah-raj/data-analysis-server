import mongoose from 'mongoose';

const NSEStockSchema = new mongoose.Schema({
  symbol: { type: String, required: false },
  date: { type: Date, required: false },
  open: { type: Number, required: false },
  high: { type: Number, required: false },
  low: { type: Number, required: false },
  close: { type: Number, required: false, default: 0 },
  averagePrice: { type: Number, required: false, default: 0 },
  totalTradedQuantity: { type: Number, required: false, default: 0 },
  deliverableQuantity: { type: Number, required: false, default: 0 },
  deliveryPercentage: { type: Number, required: false, default: 0 },
  netChange: { type: Number, required: false },
  ma3days: { type: Number, required: false, default: 0 },
  originalId: { type: mongoose.Schema.ObjectId, required: false },
  createdAt: { type: Date, default: Date.now },
})

const NSEStockModel = mongoose.model('NSEStockSchema', NSEStockSchema);
export default NSEStockModel;
