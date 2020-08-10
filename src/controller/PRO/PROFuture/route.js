import express from 'express';

import PROFutureController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "PRO Future API Working"}))

// findByDate
router.get('/', PROFutureController.findByDate)

// findLastRecord(14 days)
router.get('/:days', PROFutureController.findLastRecord)

// insert new data
router.post('/', PROFutureController.create)

// get all data
router.get('/', PROFutureController.find)


export default router;