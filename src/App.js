
import "./App.css";
import { useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input id="entertask" onChange={handleChange} />
        <button id="btn1" onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div
            className="task"

          >
            <h2>{task.taskName}</h2>
            <button id="btn2" style={{ backgroundColor: task.completed ? "#09f156" : "white" ,color: task.completed ? "white" : "black"}} onClick={() => completeTask(task.id)}> Complete </button>
            <button id="btn3" onClick={() => deleteTask(task.id)}> X </button>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
