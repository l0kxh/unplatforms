import React from "react";
import "./App.css";
import TodoContainer from "./components/todocontainer/TodoContainer";
import { useTodoListQuery } from "./services/todoservice";
import { useInProgListQuery } from "./services/InProgressService";
import { useDoneListQuery } from "./services/DoneService";

function App() {
  const todoList = useTodoListQuery();
  const inProgList = useInProgListQuery();
  const doneList = useDoneListQuery();
  return (
    <div className="app">
    <div  className="divider" ></div>
      <div className="appcontainer">
        {todoList.error ? (
          <>{todoList.error.error}</>
        ) : todoList.data ? (
          <div>
            <TodoContainer title={"To Do List"} currentList={todoList.data} />
          </div>
        ) : null}

        {inProgList.error ? (
          <>{inProgList.error.error}</>
        ) : inProgList.data ? (
          <div>
            <TodoContainer
              title={"In Progress"}
              currentList={inProgList.data}
            />
          </div>
        ) : null}

        {doneList.error ? (
          <>{doneList.error.error}</>
        ) : doneList.data ? (
          <div>
            <TodoContainer title={"Done"} currentList={doneList.data} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
