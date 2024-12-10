    import express from 'express';
    import taskscontrollers from './controllers/taskscontrollers.js';
    import tasksmiddlewares from './Middlewares/tasksmiddlewares.js'; 
    const router = express.Router();

    // Rota para buscar todas as tarefas
    router.get('/tasks', taskscontrollers.getAll);
    router.post('/tasks', tasksmiddlewares.validateBody, taskscontrollers.createtask); 
    router.delete('/tasks/:id', taskscontrollers.deletetask); 
    router.put('/tasks/:id',tasksmiddlewares.validateBody,tasksmiddlewares.validatefieldstatus, taskscontrollers.updatetask); 
    
    export default router;
