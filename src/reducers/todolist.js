export const todolistReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "DELETE":
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};
export default todolistReducer;
