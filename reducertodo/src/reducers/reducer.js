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
          return[...state, action.payload ]
    
    default:
      return state;
  }
};
