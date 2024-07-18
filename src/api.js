export const getTodos = async () => {
  const response = await fetch(
    "https://6696369a0312447373c1902b.mockapi.io/todolist/todos"
  );
  return await response.json();
};

export const addTodo = async (addedItem) => {
  const response = await fetch(
    "https://6696369a0312447373c1902b.mockapi.io/todolist/todos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedItem),
    }
  );
  return await response.json();
};

export const updateTodo = async (updatedTodo) => {
  const response = await fetch(
    `https://6696369a0312447373c1902b.mockapi.io/todolist/todos/${updatedTodo.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    }
  );
  return await response.json();
};

export const deleteTodo = async (deletedItem) => {
  const response = await fetch(
    `https://6696369a0312447373c1902b.mockapi.io/todolist/todos/${deletedItem.id}`,
    {
      method: "DELETE",
    }
  );
  return await response.json();
};
