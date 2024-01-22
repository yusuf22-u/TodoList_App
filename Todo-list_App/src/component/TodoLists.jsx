import React, { useEffect, useState } from "react";
import UserInput from "./UserInput";
import { TodoStatus } from "./TodoStatus";

export const TodoLists = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: "Go to school",
      check: false,
    },
    {
      id: 2,
      todo: "Playing football",
      check: false,
    },
    {
      id: 3,
      todo: "Go to the gym",
      check: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [numOfTasked, setNumOfTasked] = useState(0);
  const [numOfTaskedLeft, setNumOfTaskedLeft] = useState(0);
  const [numOfPercent, setNumOfPercent] = useState(0);

  const strik = {
    textDecoration: "2px red line-through",
  };
  function addNewTodo() {
    if (newTodo.trim() === "") {
      return; // Prevent adding empty todos
    }

    const newTodoItem = {
      id: todoList.length + 1,
      todo: newTodo,
      check: false,
    };

    const updatedList = [...todoList, newTodoItem];
    setTodoList(updatedList);
    setNewTodo(""); // Clear the input field
  }

  function startEditing(id, todo) {
    setEditingTodoId(id);
    setNewTodo(todo);
    setIsEditing(true);
  }

  function updateTodo() {
    if (newTodo.trim() === "") {
      return; // Prevent updating to an empty todo
    }

    const updatedList = todoList.map((item) =>
      item.id === editingTodoId ? { ...item, todo: newTodo } : item
    );
    setTodoList(updatedList);
    setNewTodo(""); // Clear the input field
    setIsEditing(false); // Exit editing mode
    setEditingTodoId(null);
  }

  function deleteTodo(id) {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  }
  function check(id) {
    const updatedList = todoList.map((item) =>
      item.id === id ? { ...item, check: !item.check } : item
    );
    setTodoList(updatedList);
  }
  useEffect(() => {
    const checkedTasks = todoList.filter((item) => item.check);
    setNumOfTasked(checkedTasks.length);
    const checkedTasksleft = todoList.filter((item) => !item.check);
    setNumOfTaskedLeft(checkedTasksleft.length);
    //total percent
    // const totalLength = todoList.map((todo) => todo.todo);

    setNumOfPercent(((checkedTasks.length / todoList.length) * 100).toFixed(2));
  }, [todoList]);

  console.log(typeof numOfPercent);
  return (
    <>
      <UserInput
        addOrUpdateTodo={isEditing ? updateTodo : addNewTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        isEditing={isEditing}
      />
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            <input
              id={item.id}
              name="name"
              type="checkbox"
              checked={item.check}
              onChange={() => check(item.id)}
            />
            <label htmlFor={item.id} style={item.check ? strik : null}>
              {" "}
              {item.todo}
            </label>

            <span>
              <button
                className="btn-up"
                onClick={() => startEditing(item.id, item.todo)}
              >
                Edit
              </button>
              <button className="btn-del" onClick={() => deleteTodo(item.id)}>
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
      <TodoStatus
        numOfTasked={numOfTasked}
        numOfTaskedLeft={numOfTaskedLeft}
        numOfPercent={numOfPercent}
        setNumOfPercent={setNumOfPercent}
      />
    </>
  );
};
