export const addTask = (task) => {
  return {
    type: "ADD",
    payload: task,
  };
};
export const updateTask = (task) => {
  return {
    type: "UPDATE",
    payload: task,
  };
};
export const deleteTask = (task) => {
  return {
    type: "DELETE",
    payload: task,
  };
};
