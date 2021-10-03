import {TODO_LOAD,TODO_FAILED,TODO_SUCCSESS} from "./types";


    const initialState = {
      ToDo:[],
      isLoading: false,
      isSuccess: false,
      isError: false,
      errMsg: null,
    };
    
    export const ToDoStore = (state = initialState, action) => {
    
      switch (action.type) {
        case TODO_LOAD:
          return {
            ...state,
            isLoading: true,
            isError: false,
            errMsg: null,
            isSuccess: false,
          };
        case TODO_FAILED:
          return {
            ...state,
            isLoading: false,
            errMsg: action.payload,
            isSuccess: false,
            isError: true,
          };
        case TODO_SUCCSESS:
          return {
            ...state,
            ToDo: action.payload,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errMsg: null,
          };
       
        default:
          return state;
      }
    };