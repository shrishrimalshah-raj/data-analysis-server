import express from 'express';

import PROIndexController from './controller';

const router = express.Router()


// health check
router.get('/health', (req, res) => res.send({message: "PRO Index API Working"}))

// findLastRecord(14 days)
router.get('/:days', PROIndexController.findLastRecord)

// findByDate
router.get('/', PROIndexController.findByDate)

// insert new data
router.post('/', PROIndexController.create)

// get all data
router.get('/', PROIndexController.find)


export default router;