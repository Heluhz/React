// TaskItem Component
const TaskItem = ({ task, onDelete, onEdit }) => {
    return (
      <div className="border p-3 rounded mb-2 flex justify-between items-center">
        <div>
          <h3 className={`text-lg font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
          <p>{task.description}</p>
          <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
        </div>
        <div>
          <button onClick={() => onEdit(task)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
          <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
        </div>
      </div>
    );
  };
export default TaskItem;