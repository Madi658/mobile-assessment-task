import { LOGIN_LOAD,LOGIN_SUCCSESS,LOGIN_FAILED,GET_TOKEN} from "./types";


    const initialState = {
      LoginUser:[],
      isLoading: false,
      isSuccess: false,
      isError: false,
      errMsg: null,
      token:'',
    };
    
    export const LoginStore = (state = initialState, action) => {
    
      switch (action.type) {
        case LOGIN_LOAD:
          return {
            ...state,
            isLoading: true,
            isError: false,
            errMsg: null,
            isSuccess: false,
          };
        case LOGIN_FAILED:
          return {
            ...state,
            isLoading: false,
            errMsg: action.payload,
            isSuccess: false,
            isError: true,
          };
        case LOGIN_SUCCSESS:
          return {
            ...state,
            LoginUser: action.payload,
            isLoading: false,
            isSuccess: true,
            isError: false,
            errMsg: null,
          };
          case GET_TOKEN:
            return {
              ...state,
              token: action.payload,
              isLoading: false,
              isSuccess: true,
              isError: false,
              errMsg: null,
            };
        default:
          return state;
      }
    };