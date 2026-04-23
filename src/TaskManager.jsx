import { useState } from "react";
import "./TaskManager.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = () => {
    if (taskTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskTitle("");
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="task-container">
      <h1>Task Manager</h1>

      <div className="task-input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">No tasks added yet.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <div>
                <p className={task.completed ? "completed" : ""}>
                  {task.title}
                </p>
                <span>
                  Status: {task.completed ? "Completed" : "Pending"}
                </span>
              </div>

              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Mark Pending" : "Mark Completed"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskManager;