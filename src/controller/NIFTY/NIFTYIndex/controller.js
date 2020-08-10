import { NIFTYIndexService } from "../../../service";
import mongoose from 'mongoose';

class NIFTYIndexController {
  async seedData(req, res) {
    try {
      const result = await NIFTYIndexService.seedData()
      return res.status(200).json({ message: "Data seeded successfully" })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }

  async findLastRecord(req, res) {
    const { days } = req.params;
    try {
      const data = await NIFTYIndexService.findLastRecord(parseInt(days));
      return res.status(200).json({ message: "Data fetch successfully", data })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }

  async find(req, res) {
    try {
      const data = await NIFTYIndexService.find()
      return res.status(200).json({ message: "Data fetch successfully", data })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }

  async findByDate(req, res) {
    let { startDate, endDate } = req.query;

    const conditions = {
      date: {
        $gte: startDate,
        $lte: endDate
      }
    }

    try {
      const data = await NIFTYIndexService.findByDate(conditions)
      return res.status(200).json({ message: "Data fetch successfully", data })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }


  async create(req, res) {
    // JSON INPUT
    
    //  {
    // "longPosition": 76547, 
    // "shortPosition": 62026, 
    // "netBuy": -114.70
    // }

    const { date, longPosition, shortPosition, netBuy } = req.body
    try {
      const lastRecord = await NIFTYIndexService.findLastRecord(1);
      const newObject = {
        date: date || new Date(),
        longPosition,
        shortPosition,
        netBuy,
        dailyLongPosition: longPosition - lastRecord[0]["longPosition"],
        dailyShortPosition: shortPosition - lastRecord[0]["shortPosition"],
        dailyLongPercentage: Number((longPosition / (longPosition + shortPosition)).toFixed(2)),
        dailyShortPercentage: Number((shortPosition / (longPosition + shortPosition)).toFixed(2)),
        originalId: mongoose.Types.ObjectId(),
        createdAt: new Date(),
      }
      const data = await NIFTYIndexService.create(newObject)
      return res.status(201).json({ message: "New record created", data });

    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }
}

export default new NIFTYIndexController();