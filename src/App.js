import React from 'react'
import Header from './Components/Header';
import TaskList from "./Components/TaskList";
import TaskListContextProvider from "./Components/TaskListContext";
import './App.css'



function App() {
  return (
    <TaskListContextProvider>
      <div className="container">

        <Header/>
      
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
