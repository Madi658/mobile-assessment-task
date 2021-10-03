import { LOGIN_LOAD,LOGIN_FAILED,LOGIN_SUCCSESS,GET_TOKEN } from "./types";

export const LoginLoading = () => ({
    type: LOGIN_LOAD,
  });
 export const Loginfailed = (err) => ({
    type: LOGIN_FAILED,
    payload: err,
  });
 export const Loginsuccess = (res) => ({
    type: LOGIN_SUCCSESS,
    payload: res,
  });
  export const GetToken = (res) => ({
    type: GET_TOKEN,
    payload: res,
  });