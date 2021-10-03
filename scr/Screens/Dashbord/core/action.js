import { TODO_FAILED,TODO_LOAD,TODO_SUCCSESS } from "./types";

TODO_FAILED
export const ToDoLoading = () => ({
    type: TODO_LOAD,
  });
 export const ToDofailed = (err) => ({
    type: TODO_FAILED,
    payload: err,
  });
 export const ToDosuccess = (res) => ({
    type: TODO_SUCCSESS,
    payload: res,
  });