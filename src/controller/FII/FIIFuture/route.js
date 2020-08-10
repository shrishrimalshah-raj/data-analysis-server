import express from 'express';

import FIIFutureController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "FII Future API Working"}))

//seed data
// router.get('/seed', FIIFutureController.seedData)

// findByDate
router.get('/', FIIFutureController.findByDate)

// findLastRecord(14 days)
router.get('/:days', FIIFutureController.findLastRecord)

// insert new data
router.post('/', FIIFutureController.create)

// get all data
router.get('/', FIIFutureController.find)


export default router;