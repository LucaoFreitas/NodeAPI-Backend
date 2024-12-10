import connection from './connection.js';

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

//insere novo 
const createtask = async (task) => {
    const {title} = task;

    const dataUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks (title,status,create_at) VALUES (?, ?, ?)';

    const [createtask] = await connection.execute(query, [title, 'pendente', dataUTC]);

    return {inserteId: createtask.insertId};

}

//deletar 

const deletetask = async (id) => {
    const [removetask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);    
    return removetask;
}
//update 
const updatetask = async (id, task) => {
    const {title, status} = task;

    const query = 'UPDATE tasks SET title =?, status= ? WHERE id = ?'
    
    const [updatetask] = await connection.execute(query, [title,status,id]);    
    return updatetask;
}
// Exportação padrão
export default {
    getAll,
    createtask,
    deletetask,
    updatetask,
};
