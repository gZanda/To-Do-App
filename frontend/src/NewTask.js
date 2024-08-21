import React, { useState } from 'react';

const NewTask = ({ onTaskCreated }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/new-task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: taskTitle }),
    })
      .then(response => response.json())
      .then(newTask => {
        setTaskTitle('');
        onTaskCreated(newTask);
      })
      .catch(error => console.error('Erro ao criar tarefa:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Nome da tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default NewTask;
