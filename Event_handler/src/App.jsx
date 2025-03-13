import { useState } from "react";
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addOrUpdateTask = (task) => {
    if (task.id) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
    setCurrentTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskForm onSave={addOrUpdateTask} currentTask={currentTask} clearTask={() => setCurrentTask(null)} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default TaskManager;
