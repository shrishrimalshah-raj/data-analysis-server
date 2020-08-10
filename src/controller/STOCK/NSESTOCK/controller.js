import { NseStockService } from "../../../service";
import mongoose from 'mongoose';
import moment from 'moment';

class NseStockController {
  async seedData(req, res) {
    try {
      const result = await NseStockService.seedData()
      return res.status(200).json({ message: "Data seeded successfully" })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }

  async nseDataSeed(req, res) {
    try {
      const data = await NseStockService.nseDataSeed()
      return res.status(200).json({ message: "Data seeded successfully", data })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }

  async find(req, res) {
    try {
      const data = await NseStockService.find()
      return res.status(200).json({ message: "Data fetch successfully", data })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }
}

export default new NseStockController();