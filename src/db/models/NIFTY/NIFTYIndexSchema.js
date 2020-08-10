import mongoose from 'mongoose';

const NIFTYIndexSchema = new mongoose.Schema({
  date: { type: Date, required: false },
  open: { type: Number, required: false },
  high: { type: Number, required: false },
  low: { type: Number, required: false },
  close: { type: Number, required: false, default: 0 },
  sharedTraded: { type: Number, required: false, default: 0 },
  turnover: { type: Number, required: false, default: 0 },
  netChange: { type: Number, required: false },
  originalId: { type: mongoose.Schema.ObjectId, required: false },
  createdAt: { type: Date, default: Date.now },
})

const NIFTYIndexModel = mongoose.model('NIFTYIndexSchema', NIFTYIndexSchema);
export default NIFTYIndexModel;
