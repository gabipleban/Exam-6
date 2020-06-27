export const TODO_TOGGLED = "TODO_TOGGLED";
export const TODO_ADDED = "TODO_ADDED";
export const TODO_REMOVED = "TODO_REMOVED";



export const toggle = (title) => ({ type: TODO_TOGGLED, payload: title });
export const add = (title) => ({ type: TODO_ADDED, payload: title });
export const remove = (title) => ({ type: TODO_REMOVED, payload: title });

