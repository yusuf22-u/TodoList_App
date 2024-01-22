import React from "react";
import "./App.css";
import { TodoLists } from "./component/TodoLists";
import { CalendarDate } from "./component/CalendarDate";

function App() {
  return (
    <>
      <div className="over-lay"></div>
      <TodoLists className="todo-lists" />
      <CalendarDate />
    </>
  );
}

export default App;
