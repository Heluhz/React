import TaskItem from "./TaskItem";
const TaskList = ({ tasks, onDelete, onEdit }) => {
    return (
      <div>
        {tasks.length > 0 ? tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        )) : <p>No tasks available.</p>}
      </div>
    );

  };

export default TaskList;