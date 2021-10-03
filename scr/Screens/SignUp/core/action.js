import {SIGNUP_FAILED,SIGNUP_SUCCSESS,SIGNUP_LOAD } from './Types';

export const SignUpLoading = () => ({
    type: SIGNUP_LOAD,
  });
 export const SignUpfailed = (err) => ({
    type: SIGNUP_FAILED,
    payload: err,
  });
 export const SignUpsuccess = (res) => ({
    type: SIGNUP_SUCCSESS,
    payload: res,
  });

  