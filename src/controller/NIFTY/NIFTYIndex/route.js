import express from 'express';

import NIFTYIndexController from './controller';

const router = express.Router()


// health check
router.get('/health', (req, res) => res.send({message: "NIFTY Index API Working"}))

//seed data
router.get('/seed', NIFTYIndexController.seedData)

// findLastRecord(14 days)
router.get('/:days', NIFTYIndexController.findLastRecord)

// findByDate(14 days)
router.get('/', NIFTYIndexController.findByDate)

// insert new data
router.post('/', NIFTYIndexController.create)

// get all data
router.get('/', NIFTYIndexController.find)

export default router;