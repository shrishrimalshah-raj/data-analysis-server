import express from 'express';

import PROCallController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "PRO Call API Working"}))

// findByDate
router.get('/', PROCallController.findByDate)

// findLastRecord(14 days)
router.get('/:days', PROCallController.findLastRecord)

// insert new data
router.post('/', PROCallController.create)

// get all data
router.get('/', PROCallController.find)


export default router;