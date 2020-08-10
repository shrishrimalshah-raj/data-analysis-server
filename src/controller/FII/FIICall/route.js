import express from 'express';

import FIICallController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "FII Call API Working"}))

//seed data
// router.get('/seed', FIICallController.seedData)

// findByDate
router.get('/', FIICallController.findByDate)

// findLastRecord(14 days)
router.get('/:days', FIICallController.findLastRecord)

// insert new data
router.post('/', FIICallController.create)

// get all data
router.get('/', FIICallController.find)


export default router;