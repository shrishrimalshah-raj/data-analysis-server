import Papa from 'papaparse';
const fs = require('fs');
const path = require('path');
import mongoose from 'mongoose';

const csvFilePath = path.join(__dirname, '../../constants/STOCK/ALLDATA.csv');
const csvFilePath1 = path.join(__dirname, '../../constants/STOCK/CF-Insider-Trading-equities.csv');

import { RootRepository } from '../RootRepository';
import { NSEStockModel } from '../../db/models'
import { convertArrayToSTOCKModelFormat, convertArrayTonseDataFormatData } from '../../lib';

class NseStockService extends RootRepository {
  constructor(model) {
    super(model)
  }

  async InsertMany(results) {
    const newData = convertArrayToSTOCKModelFormat(results.data);
    try {
      const result = await RootRepository.insertMany(newData, NSEStockModel);
      if(result) {
        console.log('!!! DATA SEEDED !!!');
      }
    } catch (error) {
      console.log('error ********', error)
    }
         
  }

  async seedData() {
    const result = await super.deleteMany();
    const countData = await super.countDocuments({});
    if (countData === 0) {
      const file = fs.createReadStream(csvFilePath);

      var csvData = [];
  
      Papa.parse(file, {
        header: true,
        complete: this.InsertMany,
      })
    }
    
  }

  async find() {
    const result = await super.find();
    return result;
  }
  
  // async findLastRecord(days) {
  //   const result = await super.findLastRecord(days);
  //   const sortedData = result.sort((a, b) => a.date - b.date)
  //   return sortedData;
  // }

  // async create(item) {
  //   const result = await super.create(item);
  //   return result;
  // }

  // async findByDate(cond) {
  //   const result = await super.findByDate(cond);
  //   return result;
  // }

  async nseDataFormatData(results) {
    const newData = convertArrayTonseDataFormatData(results.data);
    console.log('!!! DATA SEEDED nseDataFormatData !!!'); 
    return newData;     
  }

  async nseDataSeed() {

      const file = fs.readFileSync(csvFilePath1, 'utf8');

        let data;
        return new Promise( (resolve) => {
          Papa.parse(file, {
            header: true,
            complete: (results) => {
              const newData = convertArrayTonseDataFormatData(results.data);
              data = newData;
            }
          });
          resolve(data);
        });
      };    

}

export default new NseStockService(NSEStockModel);
