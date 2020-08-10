import moment from 'moment';
import mongoose from 'mongoose';
import _ from 'lodash';

// const convertArrayToFIIModelFormat = (data, checkNetBuyExist = true) => {

//   return data.map((item, idx) => {
//     var dt = new Date();

//     const newRow = {
//       date: moment(item.date).add(1, 'days').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
//       longPosition: parseInt(item.longPosition),
//       shortPosition: parseInt(item.shortPosition),
//       netBuy: checkNetBuyExist ? parseInt(item.netBuy) : 0,
//       dailyLongPosition: idx > 0 ? parseInt(item.longPosition) - parseInt(data[idx - 1].longPosition) : 0,
//       dailyShortPosition: idx > 0 ? parseInt(item.shortPosition) - parseInt(data[idx - 1].shortPosition) : 0,
//       dailyLongPercentage: idx > 0 ?
//         (parseInt(item.longPosition) / (parseInt(item.longPosition) + parseInt(item.shortPosition))).toFixed(2) : 0,
//       dailyShortPercentage: idx > 0 ?
//         (parseInt(item.shortPosition) / (parseInt(item.longPosition) + parseInt(item.shortPosition))).toFixed(2) : 0,
//       originalId: mongoose.Types.ObjectId(),
//       createdAt: dt.setMinutes(dt.getMinutes() + 30),
//     }

//     return newRow;
//   })
// }

const convertArrayToFIIModelFormat = (data, checkNetBuyExist = true) => {

  const fiiIndexData = [];
  const fiiFutureData = [];
  const fiiCallData = [];
  const fiiPutData = [];


  data.forEach((item, idx) => {
    var dt = new Date();

    // created object according fiiIndexSchema
    const indexRow = {
      date: moment(item.date).add(1, 'days').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      longPosition: parseInt(item.longIndexPosition),
      shortPosition: parseInt(item.shortIndexPosition),
      dailyLongPosition: idx > 0 ? parseInt(item.longIndexPosition) - parseInt(data[idx - 1].longIndexPosition) : 0,
      dailyShortPosition: idx > 0 ? parseInt(item.shortIndexPosition) - parseInt(data[idx - 1].shortIndexPosition) : 0,
      dailyLongPercentage: idx > 0 ?
        (parseInt(item.longIndexPosition) / (parseInt(item.longIndexPosition) + parseInt(item.shortIndexPosition))).toFixed(2) : 0,
      dailyShortPercentage: idx > 0 ?
        (parseInt(item.shortIndexPosition) / (parseInt(item.longIndexPosition) + parseInt(item.shortIndexPosition))).toFixed(2) : 0,
      netPosition: parseInt(item.longIndexPosition) - parseInt(item.shortIndexPosition),
      originalId: mongoose.Types.ObjectId(),
      createdAt: dt.setMinutes(dt.getMinutes() + 30),
    }

    // created object according fiiFutureSchema
    const futureRow = {
      date: moment(item.date).add(1, 'days').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      longPosition: parseInt(item.longFuturePosition),
      shortPosition: parseInt(item.shortFuturePosition),
      dailyLongPosition: idx > 0 ? parseInt(item.longFuturePosition) - parseInt(data[idx - 1].longFuturePosition) : 0,
      dailyShortPosition: idx > 0 ? parseInt(item.shortFuturePosition) - parseInt(data[idx - 1].shortFuturePosition) : 0,
      dailyLongPercentage: idx > 0 ?
        (parseInt(item.longFuturePosition) / (parseInt(item.longFuturePosition) + parseInt(item.shortFuturePosition))).toFixed(2) : 0,
      dailyShortPercentage: idx > 0 ?
        (parseInt(item.shortFuturePosition) / (parseInt(item.longFuturePosition) + parseInt(item.shortFuturePosition))).toFixed(2) : 0,
      netPosition: parseInt(item.longFuturePosition) - parseInt(item.shortFuturePosition),
      originalId: mongoose.Types.ObjectId(),
      createdAt: dt.setMinutes(dt.getMinutes() + 30),
    }

    // created object according fiiCallSchema
    const callRow = {
      date: moment(item.date).add(1, 'days').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      longPosition: parseInt(item.longCallPosition),
      shortPosition: parseInt(item.shortCallPosition),
      dailyLongPosition: idx > 0 ? parseInt(item.longCallPosition) - parseInt(data[idx - 1].longCallPosition) : 0,
      dailyShortPosition: idx > 0 ? parseInt(item.shortCallPosition) - parseInt(data[idx - 1].shortCallPosition) : 0,
      dailyLongPercentage: idx > 0 ?
        (parseInt(item.longCallPosition) / (parseInt(item.longCallPosition) + parseInt(item.shortCallPosition))).toFixed(2) : 0,
      dailyShortPercentage: idx > 0 ?
        (parseInt(item.shortCallPosition) / (parseInt(item.longCallPosition) + parseInt(item.shortCallPosition))).toFixed(2) : 0,
      netPosition: parseInt(item.longCallPosition) - parseInt(item.shortCallPosition),
      originalId: mongoose.Types.ObjectId(),
      createdAt: dt.setMinutes(dt.getMinutes() + 30),
    }

    // created object according fiiPutSchema
    const putRow = {
      date: moment(item.date).add(1, 'days').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      longPosition: parseInt(item.longPutPosition),
      shortPosition: parseInt(item.shortPutPosition),
      dailyLongPosition: idx > 0 ? parseInt(item.longPutPosition) - parseInt(data[idx - 1].longPutPosition) : 0,
      dailyShortPosition: idx > 0 ? parseInt(item.shortPutPosition) - parseInt(data[idx - 1].shortPutPosition) : 0,
      dailyLongPercentage: idx > 0 ?
        (parseInt(item.longPutPosition) / (parseInt(item.longPutPosition) + parseInt(item.shortPutPosition))).toFixed(2) : 0,
      dailyShortPercentage: idx > 0 ?
        (parseInt(item.shortPutPosition) / (parseInt(item.longPutPosition) + parseInt(item.shortPutPosition))).toFixed(2) : 0,
      netPosition: parseInt(item.longPutPosition) - parseInt(item.shortPutPosition),
      originalId: mongoose.Types.ObjectId(),
      createdAt: dt.setMinutes(dt.getMinutes() + 30),
    }

    fiiIndexData.push(indexRow);
    fiiFutureData.push(futureRow);
    fiiCallData.push(callRow);
    fiiPutData.push(putRow);
  })

  return {
  fiiIndexData,
  fiiFutureData,
  fiiCallData,
  fiiPutData,
  };
}

const convertArrayToNIFTYModelFormat = (data) => {

  return data.map((item, idx) => {
    var dt = new Date();
    var date = new Date(item.date);

    const newRow = {
      date: moment(date).add(1, 'days').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      open: parseInt(item.open),
      high: parseInt(item.high),
      low: parseInt(item.low),
      close: parseInt(item.close),
      sharedTraded: parseInt(item.sharedTraded),
      turnover: parseInt(item.turnover),
      netChange: idx > 0 ? parseInt(item.close) - parseInt(data[idx - 1].close) : 0,
      originalId: mongoose.Types.ObjectId(),
      createdAt: dt.setMinutes(dt.getMinutes() + 30),
    }

    return newRow;
  })
}


const sumOfArray = (array) => {
  return array.reduce((a, b) => a + b, 0)
}

const calculateMovingAverage = (idx, data) => {

  let newData = data.slice(idx - 2, idx + 1);  
  let deliverableArray = [];
  let tradedArray = [];
  
  newData.forEach(item => {
    deliverableArray.push(parseInt(item['Deliverable Qty']));
    tradedArray.push(parseInt(item['Total Traded Quantity']));
  })

  const result = sumOfArray(deliverableArray) / sumOfArray(tradedArray)  
    return Number(result.toFixed(2));
}

const convertArrayToSTOCKModelFormat = (data) => {

  return data.map((item, idx) => {
    var dt = new Date();
    var itemDate = new Date(item['Date'])

    const newRow = {
      symbol: item['Symbol'],
      date: moment(itemDate).add(1, 'days').utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      open: parseInt(item['Open Price']),
      high: parseInt(item['High Price']),
      low: parseInt(item['Low Price']),
      close: parseInt(item['Close Price']),
      averagePrice: parseInt(item['Average Price']),
      totalTradedQuantity: parseInt(item['Total Traded Quantity']),
      deliverableQuantity: parseInt(item['Deliverable Qty']),
      deliveryPercentage: parseInt(item['% Dly Qt to Traded Qty']), 
      netChange: idx > 0 ? (Number(item['Close Price']) - Number(data[idx - 1]['Close Price'])).toFixed(2) : 0,
      ma3days: idx >= 2 ? calculateMovingAverage(idx, data) : 0,
      originalId: mongoose.Types.ObjectId(),
      createdAt: dt.setMinutes(dt.getMinutes() + 30),
    }
    
    return newRow;
  })
}


const convertArrayTonseDataFormatData = (data) => {

  const newData = data.filter(item => {
   const categoryOfPerson = item['CATEGORY OF PERSON']
    if (categoryOfPerson === "Promoter Group" || categoryOfPerson === "Promoters") {
        const modeOfAcquisition = item['MODE OF ACQUISITION']
      if(modeOfAcquisition === "Market Purchase") {
          return true
      }
    }
    return false;
  })

  const newObject = {}
  
  newData.forEach((item) => {
    const symbol = item['SYMBOL'];
    const value = item['VALUE OF SECURITY (ACQUIRED/DISPLOSED)'];
    
    if (newObject.hasOwnProperty(symbol)) {
      newObject[symbol] = newObject[symbol] + parseInt(value)
    } else {
      newObject[symbol] = parseInt(value)
    }
  })
  
  Object.keys(newObject).forEach(key => {
    if (!(newObject[key] > 10000000)) {
      delete newObject[key];
      }
  });

  let entries = Object.entries(newObject);
  let sortedArray = entries.sort((a, b) => b[1] - a[1]);
  return sortedArray;
}


export {
  convertArrayToFIIModelFormat,
  convertArrayToNIFTYModelFormat,
  convertArrayToSTOCKModelFormat,
  convertArrayTonseDataFormatData,
}