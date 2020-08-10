import express from 'express';

import NseStockController from './controller';

const router = express.Router()


// health check
router.get('/health', (req, res) => res.send({message: "NSE STOCK API Working"}))

//stock deliverables data
router.get('/seed', NseStockController.seedData)

//seed data
router.get('/nsedata/seed', NseStockController.nseDataSeed)

// get all data
router.get('/', NseStockController.find)

export default router;