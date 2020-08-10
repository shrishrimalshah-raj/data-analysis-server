import express from 'express';

import CLIENTCallController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "CLIENT Call API Working"}))

// findByDate
router.get('/', CLIENTCallController.findByDate)

// findLastRecord(14 days)
router.get('/:days', CLIENTCallController.findLastRecord)

// insert new data
router.post('/', CLIENTCallController.create)

// get all data
router.get('/', CLIENTCallController.find)


export default router;