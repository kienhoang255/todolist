import React, { createContext, useEffect, useReducer } from "react";
import Body from "./Layout/Body/Body";
import Header from "./Layout/Header/Header";

export const ListContext = createContext();

function App() {
  const listLocal = JSON.parse(localStorage.getItem("toDoListReact"));

  //useReducer
  const initialState = listLocal;

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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("toDoListReact", JSON.stringify(state));
    // console.log(state);
  }, [state]);

  return (
    <ListContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </ListContext.Provider>
  );
}

export default App;
