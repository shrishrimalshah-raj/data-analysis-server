import mongoose from "mongoose";
import axios from "axios";

import { RootRepository } from "../RootRepository";
import { FNOPCRStockModel, FNOPCRIndexModel } from "../../db/models";

class FNOPCRService extends RootRepository {
  constructor(model) {
    super(model);
  }
  // https://www.nseindia.com/api/liveEquity-derivatives?index=nifty_bank_fut
  // https://www.bloombergquint.com/feapi/markets/options/open-interest?type=break-up&expiry=current&limit=200


  async seedStockData() {
    // delete all records
    // await super.deleteMany();
    const url =
      "https://www.bloombergquint.com/feapi/markets/options/put-call-ratio?security-type=stock&limit=200";

    const response = await axios.get(url, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        contentType: "application/json",
      },
    });

    const { data } = response;

    data["put-call-ratio"].forEach(async (element) => {
      element.date = data["broadcasted-at"];
      await this.create(element);
    });

    console.log("!!! Data Seeded For FNO Stocks !!!");
  }

  async seedIndexData() {
    // delete all records
    // await FNOPCRIndexModel.deleteMany();
    const url =
      "https://www.bloombergquint.com/feapi/markets/options/put-call-ratio?security-type=index&limit=200";

    const response = await axios.get(url, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        contentType: "application/json",
      },
    });

    const { data } = response;

    data["put-call-ratio"].forEach(async (element) => {
      element.date = data["broadcasted-at"];
      await FNOPCRIndexModel.create(element);
    });

    console.log("!!! Data Seeded For FNO Index !!!");
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

  async create(item) {
    const result = await super.create(item);
    return result;
  }

  // async findByDate(cond) {
  //   const result = await super.findByDate(cond);
  //   return result;
  // }

  async nseDataFormatData(results) {
    const newData = convertArrayTonseDataFormatData(results.data);
    console.log("!!! DATA SEEDED nseDataFormatData !!!");
    return newData;
  }

  async nseDataSeed() {
    const file = fs.readFileSync(csvFilePath1, "utf8");

    let data;
    return new Promise((resolve) => {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const newData = convertArrayTonseDataFormatData(results.data);
          data = newData;
        },
      });
      resolve(data);
    });
  }
}

export default new FNOPCRService(FNOPCRStockModel);
