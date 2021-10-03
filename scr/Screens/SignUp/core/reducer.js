import { SIGNUP_LOAD,SIGNUP_SUCCSESS,SIGNUP_FAILED } from "./Types";


    const initialState = {
      Rejister:[],
      isLoading: false,
      isSuccess: false,
      isError: false,
      errMsg: null,
    };
    
    export const RejisterStore = (state = initialState, action) => {
    
      switch (action.type) {
        case SIGNUP_LOAD:
          return {
            ...state,
            isLoading: true,
            isError: false,
            errMsg: null,
            isSuccess: false,
          };
        case SIGNUP_FAILED:
          return {
            ...state,
            isLoading: false,
            errMsg: action.payload,
            isSuccess: false,
            isError: true,
          };
        case SIGNUP_SUCCSESS:
          return {
            ...state,
            Rejister: action.payload,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errMsg: null,
          };
        default:
          return state;
      }
    };