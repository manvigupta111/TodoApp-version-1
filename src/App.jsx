import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "do laundry", dueDate: "2023-01-01" },
    { id: 2, text: "buy groceries", dueDate: "2023-01-02" },
    { id: 3, text: "clean the house", dueDate: "2023-01-03" },
  ]);

  const handleAddTask = (event) => {
    try {
      event.preventDefault();
      const newTask = {
        id: tasks.length + 1,
        text: event.target.todoItem.value,
        dueDate: event.target.dueDate.value,
      };
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error adding task", error);
      alert("Error Adding task, try again");
    }
  };

  const handleDeleteTask = (taskId) => {
    try {
      setTasks(tasks.filter((task) => task.id != taskId));
    } catch (error) {
      console.error("Error deleting task", error);
      alert("Error deleting task, try again");
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-content">
        <main className="w-100">
          <header>
            <h1 className="text-center">ToDo List App</h1>
          </header>
          <form onSubmit={handleAddTask}>
            <div className="row todo-input-container">
              <div className="col-4">
                <input
                  className="w-100 todo-input"
                  type="text"
                  required
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                  name="todoItem"
                  aria-label="Enter your to do item"
                  placeholder="Enter the to do item"
                />
              </div>
              <div className="col-4">
                <input
                  type="date"
                  name="dueDate"
                  required
                  aria-label="Select a date"
                  className="w-100"
                />
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary w-100">
                  Add Task
                </button>
              </div>
            </div>
          </form>
          <section className="m-4 todo-list">
            <ol reversed className="p-4">
              {tasks
                .slice()
                .reverse()
                .map((task) => {
                  return (
                    <div className="row todo-item d-flex justify-space-between">
                      <div className="col-4">
                        <li key={task.id}>{task.text}</li>
                      </div>
                      <div className="col-4">
                        <div>{task.dueDate}</div>
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <button
                          className="btn btn-danger"
                          type="submit"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })}
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
