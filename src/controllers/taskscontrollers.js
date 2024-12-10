import tasksmodel from '../models/tasksmodel.js';

const getAll = async (req, res) => {
    try {
        const tasks = await tasksmodel.getAll();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
};

const createtask = async (req, res) => {
    try {
        const createtask = await tasksmodel.createtask(req.body);
        return res.status(201).json(createtask);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating task', error: error.message });
    }
};

const deletetask = async (req, res) => {
    try {
        const { id } = req.params;
        await tasksmodel.deletetask(id);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
};

const updatetask = async (req, res) => {
    try {
        const { id } = req.params;
        await tasksmodel.updatetask(id, req.body);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: 'Error updating task', error: error.message });
    }
};

export default {
    getAll,
    createtask,
    deletetask,
    updatetask,
};
