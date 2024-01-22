import React from "react";

function UserInput({
  addNewTodo,
  newTodo,
  setNewTodo,
  addOrUpdateTodo,
  isEditing,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateTodo();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="add">
          <input
            type="text"
            placeholder={isEditing ? "Update list" : "Add new list"}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>
        <button type="submit" onClick={addNewTodo}>
          {isEditing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default UserInput;
