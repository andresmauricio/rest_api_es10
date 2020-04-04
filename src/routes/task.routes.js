import { Router } from 'express';
import  { connnect } from '../database';
import { ObjectID } from 'mongodb';
const router = Router();

router.get('/', async (req, res) => {
    const db = await connnect();
    const result = await db.collection('tasks').find({}).toArray(); 
    res.json(result);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connnect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connnect();
    const task = {
        title: req.body.title,
        description: req.body.description
    }
    const result = await db.collection('tasks').insert(task);
    res.json(result.ops[0]); 
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connnect();
    const result = await db.collection('tasks').remove({_id: ObjectID(id)});
    res.json(true);
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const taskUpdated = {
        title: req.body.title,
        description: req.body.description
    }
    const db = await connnect();
    await db.collection('tasks').updateOne({_id: ObjectID(id)}, { $set: taskUpdated });
    res.json(true); 
});

export default router;