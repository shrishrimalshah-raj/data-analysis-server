import { FNOPCRService } from "../../service";

class FNOPCRController {
  async seedStockData(req, res) {
    try {
      const result = await FNOPCRService.seedStockData()
      return res.status(200).json({ message: "Data seeded successfully" })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }

  async seedIndexData(req, res) {
    try {
      const result = await FNOPCRService.seedIndexData()
      return res.status(200).json({ message: "Data seeded successfully" })
    } catch (error) {
      return res.status(500).json({ "error": error })
    }
  }

  // async nseDataSeed(req, res) {
  //   try {
  //     const data = await FNOPCRService.nseDataSeed()
  //     return res.status(200).json({ message: "Data seeded successfully", data })
  //   } catch (error) {
  //     return res.status(500).json({ "error": error })
  //   }
  // }

  // async find(req, res) {
  //   try {
  //     const data = await FNOPCRService.find()
  //     return res.status(200).json({ message: "Data fetch successfully", data })
  //   } catch (error) {
  //     return res.status(500).json({ "error": error })
  //   }
  // }
}

export default new FNOPCRController();