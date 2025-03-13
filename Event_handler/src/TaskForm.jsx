import { useState } from "react";
  const TaskForm = ({ onSave, currentTask, clearTask }) => {
    const [task, setTask] = useState(currentTask || { title: "", description: "", dueDate: "", completed: false });
  
    const handleChange = (e) => {
      setTask({ ...task, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(task);
      setTask({ title: "", description: "", dueDate: "", completed: false });
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <input name="title" placeholder="Title" value={task.title} onChange={handleChange} className="border p-2 w-full mb-2" /> <br /><br />
        <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} className="border p-2 w-full mb-2" /><br /><br />
        <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="border p-2 w-full mb-2" />
        <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">{currentTask ? "Update" : "Add"} Task</button>
        {currentTask && <button onClick={clearTask} className="ml-2 text-red-500">Cancel</button>}
      </form>
    );
  };
  export default TaskForm;