import express from 'express';

import FIIIndexController from './controller';

const router = express.Router()


// health check
router.get('/health', (req, res) => res.send({message: "FII Index API Working"}))

//seed data
router.get('/seed', FIIIndexController.seedData)

// findLastRecord(14 days)
router.get('/:days', FIIIndexController.findLastRecord)

// findByDate
router.get('/', FIIIndexController.findByDate)

// insert new data
router.post('/', FIIIndexController.create)

// get all data
router.get('/', FIIIndexController.find)


export default router;