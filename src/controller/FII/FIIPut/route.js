import express from 'express';

import FIIPutController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "FII Put API Working"}))

//seed data
// router.get('/seed', FIIPutController.seedData)

// findByDate
router.get('/', FIIPutController.findByDate)

// findLastRecord(14 days)
router.get('/:days', FIIPutController.findLastRecord)

// insert new data
router.post('/', FIIPutController.create)

// get all data
router.get('/', FIIPutController.find)


export default router;