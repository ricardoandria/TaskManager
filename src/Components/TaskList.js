import React, { useContext } from "react";
import Task from "./Task";
import { TaskListContext } from "./TaskListContext";
import './css/TaskList.css'

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ? 
        <ul>
          {tasks.map((task) => {
            return <Task taske={task} key={task.id} />;
          })}
        </ul>
       : 
        <div className="no-task">EMPTY TASK</div>
      }
    </div>
  );
};

export default TaskList;
