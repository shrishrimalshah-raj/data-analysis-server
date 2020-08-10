import express from 'express';

import PROPutController from './controller';

const router = express.Router()

// health check
router.get('/health', (req, res) => res.send({message: "PRO Put API Working"}))

// findByDate
router.get('/', PROPutController.findByDate)

// findLastRecord(14 days)
router.get('/:days', PROPutController.findLastRecord)

// insert new data
router.post('/', PROPutController.create)

// get all data
router.get('/', PROPutController.find)


export default router;