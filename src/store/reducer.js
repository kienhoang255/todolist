const initialState = JSON.parse(localStorage.getItem("toDoListReact"));

function reducer(state, action) {
  switch (action.type) {
    case "addFirst":
      return [action.data];
    case "addCard":
      return [...state, action.data];
    case "delCard":
      return [...action.data];
    case "renameCard":
      return [...action.data];
    case "doAll":
      return [...action.data];
    default:
      return state;
  }
}

export { initialState };
export default reducer;
