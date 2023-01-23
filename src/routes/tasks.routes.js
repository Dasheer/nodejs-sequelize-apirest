import {Router} from "express";
import {getTask, createTask} from "../controllers/tasks.controller.js";
const router = Router()

router.get('/tasks', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id')
router.delete('/tasks/:id')
router.get('/tasks/:id')

export default router
