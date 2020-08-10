import express from 'express';

import CLIENTPutController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "CLIENT Put API Working"}))

// findByDate
router.get('/', CLIENTPutController.findByDate)

// findLastRecord(14 days)
router.get('/:days', CLIENTPutController.findLastRecord)

// insert new data
router.post('/', CLIENTPutController.create)

// get all data
router.get('/', CLIENTPutController.find)


export default router;