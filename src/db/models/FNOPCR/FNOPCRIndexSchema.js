import mongoose from 'mongoose';

const FNOPCRIndexSchema = new mongoose.Schema({
  "symbol-strike": { type: String, required: false },
  "spot-price": { type: Number, required: false },
  "call-open-interest": { type: Number, required: false },
  "call-open-interest-change": { type: Number, required: false },
  "call-open-interest-change-percentage": { type: Number, required: false },
  "put-open-interest": { type: Number, required: false },
  "put-open-interest-change": { type: Number, required: false },
  "put-open-interest-change-percentage": { type: Number, required: false },
  "pcr-open-interest-current": { type: Number, required: false },
  "pcr-open-interest-previous": { type: Number, required: false },
  "pcr-open-interest-change": { type: Number, required: false },
  "pcr-volume-current": { type: Number, required: false },
  "pcr-volume-previous": { type: Number, required: false },
  "pcr-volume-change": { type: Number, required: false },
  "symbol": { type: String, required: false },
  date: { type: Date, required: false },
  originalId: { type: mongoose.Schema.ObjectId, required: false },
  createdAt: { type: Date, default: Date.now },
})

const FNOPCRIndexModel = mongoose.model('FNOPCRIndexSchema', FNOPCRIndexSchema);
export default FNOPCRIndexModel;
