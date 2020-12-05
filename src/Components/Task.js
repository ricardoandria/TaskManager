import React, { useContext } from "react";
import "./css/Task.css";
import { TaskListContext } from "./TaskListContext";

const Task = ({ taske, id , complete }) => {
  const { removeTask, findItem, editTask } = useContext(TaskListContext);
  const checkTask = e => editTask(id, e.target.checked)
  return (
    <div className="list-item">
      <li>
        <input className="check" type="checkbox" onChange={checkTask} />
        <span className={complete ? "task-done" : ""}>{taske.title}</span>
        <div className="btn">
          <button className="btn-delete" onClick={() => removeTask(taske.id)}>
            DELETE
          </button>

          <button className="btn-edit" onClick={() => findItem(taske.id)}>
            EDIT
          </button>
        </div>
      </li>
    </div>
  );
};

export default Task;
