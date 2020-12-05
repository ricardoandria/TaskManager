import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "./TaskListContext";
import "./css/Task.css";

const TaskForm = () => {
  const { addTask,  editItem , editTask} = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(editItem === null) {
      setTitle("");
      addTask(title);
    } else {
      editTask(title,editItem.id)
    
    }
    
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem)
    } else {
      setTitle("");
    }
  }, [editItem]);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Add task"
          required
        />
        <button className="input-sub" type="submit" value="Add" >{editItem ? 'Update item' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
