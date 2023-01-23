import {Task} from "../models/Task.js";

export const getTask = async (req, res) => {
    try {
        const task = await Task.findAll();
        res.json(task);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const createTask = async (req, res) => {
    try {
        const {name, done, projectId} = req.body;

        const newTask = await Task.create({
            name,
            done,
            projectId
        });
        res.json(newTask);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
