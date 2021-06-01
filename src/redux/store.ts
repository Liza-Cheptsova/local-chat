import { combineReducers, createStore } from "redux";
import { chatReducer } from "./chatReducer";

export type RootReducerType = ReturnType<typeof reducer>;

let reducer = combineReducers({
  chat: chatReducer,
});

let preloadedState;
let persistedTodosString = localStorage.getItem("state");
if (persistedTodosString) {
  preloadedState = JSON.parse(persistedTodosString);
}

export let store = createStore(reducer, preloadedState);

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
  localStorage.setItem("messages", JSON.stringify(store.getState().chat.messages));
});
