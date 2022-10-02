import { useEffect, useReducer } from "react";
import Context from "./Context";
import reducer, { initialState } from "./reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("toDoListReact", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
