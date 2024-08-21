import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import NewTask from './NewTask';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch('http://localhost:8080/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Erro ao buscar tarefas:', error));
  };

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Trabalho Prático Devops</h1>
      <NewTask onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} onTaskDeleted={fetchTasks} />
    </div>
  );
};

export default App;
