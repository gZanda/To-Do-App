import React from 'react';

const TaskList = ({ tasks, onTaskDeleted }) => {

  const deleteTask = (id) => {
    fetch(`http://localhost:8080/delete/${id}`, { method: 'DELETE' })
      .then(() => onTaskDeleted())
      .catch(error => console.error('Erro ao deletar tarefa:', error));
  };

  return (
    <div>
      <h2>- Lista de Tarefas -</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} <button onClick={() => deleteTask(task.id)}>Feita!</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
