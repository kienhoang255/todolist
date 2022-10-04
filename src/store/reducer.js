import {
  ADD_CARD,
  REMOVE_CARD,
  RENAME_CARD,
  ADD_TASK,
  REMOVE_TASK,
  RENAME_TASK,
  CHANGE_DES_TASK,
  CHANGE_STATUS_TASK,
  CHANGE_WARNING_TASK,
} from "./constants";

const findTask = (state, index, parentTask) => {
  const initState = [...state];
  const taskFound = initState.filter((e) => e === parentTask)[0].task[index];
  // console.log(taskFound);
  // console.log(initState);
  return taskFound;
};

const removeTask = (state, parentTask, index) => {
  const initState = [...state];
  initState.filter((e) => e === parentTask)[0].task.splice(index, 1);
  return initState;
};

const initialState = JSON.parse(localStorage.getItem("toDoListReact"));
function reducer(state, action) {
  switch (action.type) {
    case ADD_CARD:
      if (initialState === null) {
        return [action.payload];
      } else return [...state, action.payload];

    case REMOVE_CARD:
      const removeCard = [...state];
      removeCard.splice(action.payload, 1);
      return removeCard;

    case RENAME_CARD:
      const idCard = action.payload.index;
      const renameCard = [...state];
      renameCard[idCard].title_card = action.payload.nameTitle;
      return [...state];

    case ADD_TASK:
      // function test(...rest) {
      //   for (var i = 0; i < rest.length; i++) {
      //     if (i === action.payload.index)
      //       console.log(rest[i].task.push([action.payload.task]));
      //   }
      // }
      // test(...state);
      // console.log(...state,state[action.payload.index].task : action.payload.task ;
      //=========================================================
      const idCardToAdd = action.payload.index;
      const taskToAdd = action.payload.task;
      const addTask = [...state];
      addTask[idCardToAdd].task.push(taskToAdd);
      console.log(addTask);
      return [...state];

    case RENAME_TASK:
      findTask(state, action.payload.index, action.payload.parentValue).title =
        action.payload.title;
      return [...state];

    case CHANGE_DES_TASK:
      findTask(
        state,
        action.payload.index,
        action.payload.parentValue
      ).description = action.payload.description;
      return [...state];

    case CHANGE_STATUS_TASK:
      findTask(state, action.payload.index, action.payload.parentValue).status =
        action.payload.status;
      return [...state];
    case CHANGE_WARNING_TASK:
      findTask(
        state,
        action.payload.index,
        action.payload.parentValue
      ).warning = action.payload.warning;
      return [...state];

    case REMOVE_TASK:
      removeTask(state, action.payload.parentValue, action.payload.index);
      return [...state];

    default:
      return state;
  }
}

export { initialState };
export default reducer;
