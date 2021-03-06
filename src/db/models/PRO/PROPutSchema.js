import mongoose from 'mongoose';

const returnMongooseType = (type, required = false) => {
  if (type === String) {
    return { type, required, default: '' }
  }

  if (type === Date) {
    return { type, required }
  }

  if (type === Number) {
    return { type, required, default: 0 }
  }
  
  // default case
  return {}
};

// 'Future Index Long' is same as longPosition
// 'Future Index Short' is same as shortPosition
const PROPutSchema = new mongoose.Schema({
  'Client Type': returnMongooseType(String),
  longPosition: returnMongooseType(Number),
  shortPosition: returnMongooseType(Number),
  dailyLongPosition: returnMongooseType(Number),
  dailyShortPosition: returnMongooseType(Number),
  dailyLongPercentage: returnMongooseType(Number),
  dailyShortPercentage: returnMongooseType(Number),
  netPosition: returnMongooseType(Number),
  date: returnMongooseType(Date),
  originalId: { type: mongoose.Schema.ObjectId, required: false },
  createdAt: { type: Date, default: Date.now },
})

const PROPutModel = mongoose.model('PROPutSchema', PROPutSchema);
export default PROPutModel;
