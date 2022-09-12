import { combineReducers } from "redux";

const INITIAL_STATE = {
  items: [],
  toggle: false,
  editMode: false,
  editValue: {},
};

const addTask = (tasks, task) => {
  if (Object.keys(task).length <= 2) {
    return [...tasks];
  }
  const existing = tasks.find((t) => t.id === task.id);

  if (existing) {
    return tasks.map((t) =>
      t.id === task.id
        ? {
            ...t,
            description: task.description || t.description,
            date: task.date || t.date,
            time: task.time || t.time,
          }
        : t
    );
  }

  return [...tasks, task];
};

const removeTask = (tasks, task) => {
  const existing = tasks.find((t) => t.id === task.id);

  if (existing) {
    return tasks.filter((t) => t.id !== task.id);
  }
  return [...tasks, task];
};

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: addTask(state.items, action.payload),
        editValue: {},
        editMode: false,
      };
    case "TOGGLE":
      return {
        ...state,
        toggle: !state.toggle,
        editMode: false,
      };
    case "EDIT_MODE":
      return {
        ...state,
        toggle: !state.toggle,
        editMode: true,
        editValue: action.payload,
      };

    case "DELETE_ITEM":
      return {
        ...state,
        toggle: !state.toggle,
        editValue: {},

        items: removeTask(state.items, action.payload),
      };

    default:
      return state;
  }
};

export default combineReducers({
  input: inputReducer,
});
