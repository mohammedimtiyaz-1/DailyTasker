import React, { useState, useEffect } from "react";
import "./Todo.css";
import CreateTask from "./CreateTask";
import Task from "./Task";

function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">
        {tasks.length === 0
          ? "Lets list out Todays Tasks"
          : `Pending tasks ${tasksRemaining}`}
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
