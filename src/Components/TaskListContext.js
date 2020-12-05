import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [editItem, setEditItem] = useState(null)

  const addTask = (title) => {
    setTasks([...tasks, { title, id: Math.floor(Math.random() * 1000), complete : false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const findItem = id => {
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  const editTask = (id,status) => {
    const newTask = tasks.map(task => (task.id === id ? {...task, complete : status} : task))

    setTasks(newTask)
    setEditItem(null)
  }

  return (
    <div>
      <TaskListContext.Provider value={{ tasks, addTask, removeTask , findItem, editTask , editItem }}>
        {props.children}
      </TaskListContext.Provider>
    </div>
  );
};

export default TaskListContextProvider;
