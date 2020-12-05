import React, { useContext,useState } from "react";
import { FaTasks } from "react-icons/fa";
import "./css/Header.css";
import TaskForm from "./TaskForm";
import { TaskListContext } from "./TaskListContext";

const Header = () => {
  

  return (
    <div className="Header-form">
      <h1>
        <FaTasks />
        Task Manager
      </h1>

       <TaskForm/>
    </div>
  );
};

export default Header;
