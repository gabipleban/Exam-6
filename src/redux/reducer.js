import { combineReducers } from "redux";
import {TODO_ADDED, TODO_REMOVED, TODO_TOGGLED} from "./actions";

const todos = (state = [], action) => {
  if(action.type ===TODO_ADDED){
    return [...state, { title: action.payload, done: false }];
  }
  // if(action.type ===TODO_TOGGLED){
  //   const newState = [...state];
  //   const newState = 
  //   return newState;
  // }
  if(action.type ===TODO_REMOVED){
    const newState = [...state];
    const index = newState.findIndex(({ title }) => title === action.payload);
    newState.splice(index, 1);
    return newState;
  }
  
return state
};

export default combineReducers({
  todos
});