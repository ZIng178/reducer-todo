export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn about redux",
    completed: false,
    id: 3892987580
  }
];

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          console.log("toggling", todo);
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "CLEAR":
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
};
