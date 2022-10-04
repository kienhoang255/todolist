import {
  ADD_CARD,
  ADD_TASK,
  CHANGE_DES_TASK,
  CHANGE_STATUS_TASK,
  CHANGE_WARNING_TASK,
  REMOVE_CARD,
  REMOVE_TASK,
  RENAME_CARD,
  RENAME_TASK,
} from "./constants";

export const addCard = (payload) => ({
  type: ADD_CARD,
  payload,
});

export const removeCard = (payload) => ({
  type: REMOVE_CARD,
  payload,
});

export const renameCard = (payload) => ({
  type: RENAME_CARD,
  payload,
});

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const renameTask = (payload) => ({
  type: RENAME_TASK,
  payload,
});

export const changeDesTask = (payload) => ({
  type: CHANGE_DES_TASK,
  payload,
});

export const changeStatusTask = (payload) => ({
  type: CHANGE_STATUS_TASK,
  payload,
});

export const changeWarningTask = (payload) => ({
  type: CHANGE_WARNING_TASK,
  payload,
});

export const removeTask = (payload) => ({
  type: REMOVE_TASK,
  payload,
});
