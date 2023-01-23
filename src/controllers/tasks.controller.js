import {Task} from "../models/Task.js";

export const getTasks = async (req, res) => {
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

export const getTask = async (req, res) => {
    const {id} = req.params

    try {
        const task = await Task.findOne({
            where: {id}
        })
        res.json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const updateTask = async (req, res) => {
    const {id} = req.params

    try {

        const task = await Task.findOne({
            where: {
                id
            }
        });
        task.set(req.body);
        await task.save();
        return res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const deleteTask = async (req, res) => {
    const {id} = req.params

    try {

        await Task.destroy({
            where: {
                id
            }
        });
        res.sendStatus(204).json({
            message: 'successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
