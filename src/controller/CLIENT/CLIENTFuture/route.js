import express from 'express';

import CLIENTFutureController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "CLIENT Future API Working"}))

// findByDate
router.get('/', CLIENTFutureController.findByDate)

// findLastRecord(14 days)
router.get('/:days', CLIENTFutureController.findLastRecord)

// insert new data
router.post('/', CLIENTFutureController.create)

// get all data
router.get('/', CLIENTFutureController.find)


export default router;