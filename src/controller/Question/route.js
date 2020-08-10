import express from 'express';

import { QuestionModel } from '../../db/models';

const router = express.Router()

// get all quiz questions
router.get('/', async (req, res) => {
    try {
        const questions = await QuestionModel.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// get one quiz question
router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id 

        const question = await QuestionModel.findOne({_id})        
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// create one quiz question
router.post('/', async (req, res) => {
    try {
        const { description, alternatives } = req.body

        const question = await QuestionModel.create({
            description,
            alternatives
        })
        return res.status(201).json(question);

    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

// update one quiz question
router.put('/:id', async (req, res) => {
    try {
        const _id = req.params.id 
        const { description, alternatives } = req.body

        let question = await QuestionModel.findOne({_id})

        if(!question){
            question = await QuestionModel.create({
                description,
                alternatives
            })    
            return res.status(201).json(question)
        }else{
            question.description = description
            question.alternatives = alternatives
            await question.save()
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

// delete one quiz question
router.delete('/:id', async (req, res) => {
    try {
        const _id = req.params.id 

        const question = await QuestionModel.deleteOne({_id})

        if(question.deletedCount === 0){
            return res.status(404).json()
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})




export default router;