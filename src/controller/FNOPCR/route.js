import express from 'express';

import FNOPCRController from './controller';

const router = express.Router()


// health check
router.get('/health', (req, res) => res.send({message: "FNO PCR STOCK API Working"}))

//stock deliverables data
router.get('/stock/seed', FNOPCRController.seedStockData)

//stock deliverables data
router.get('/index/seed', FNOPCRController.seedIndexData)

//seed data
// router.get('/nsedata/seed', FNOPCRStockController.nseDataSeed)

// get all data
// router.get('/', FNOPCRStockController.find)

export default router;