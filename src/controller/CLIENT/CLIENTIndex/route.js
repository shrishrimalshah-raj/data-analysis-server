import express from 'express';

import CLIENTIndexController from './controller';

const router = express.Router()


// health check
router.get('/health', (req, res) => res.send({message: "CLIENT Index API Working"}))

// findLastRecord(14 days)
router.get('/:days', CLIENTIndexController.findLastRecord)

// findByDate
router.get('/', CLIENTIndexController.findByDate)

// insert new data
router.post('/', CLIENTIndexController.create)

// get all data
router.get('/', CLIENTIndexController.find)


export default router;