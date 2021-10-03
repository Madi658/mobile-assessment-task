import {
  BaseUrl,
  LOGIN_END_POINT,
  LOGOUT,
  REFRESH_TOKEN,
} from '../../EndPoints/EndPoints';
import {GetToken, Loginfailed, LoginLoading, Loginsuccess} from './core/action';
import axios from 'axios';
import { GoToLogin } from '../Dashbord/modules';
export const GoToSignUp=(navigation)=>{
  navigation.navigate('Signup');
}

export const LoginMethod = (navigation, Email, Password) => {
 
    return async dispatch => {
      dispatch(LoginLoading());
      try {
        await axios
          .post(BaseUrl + LOGIN_END_POINT, {
            email: Email,
            password: Password,
          })
          .then(res => {
            dispatch(Loginsuccess(res.data));
            dispatch(GetToken(res.data.user.token));
            navigation.reset({
              index: 0,
              routes: [{name: 'MainScreen'}],
            });
          })
          .catch(err => {
            dispatch(Loginfailed(err));
            alert(err);
          });
      } catch (err) {
        dispatch(Loginfailed(err));
        alert(err);
      }
    };
};
export const LogoutMethod = (navigation,token) => {
  return async dispatch => {
    try {
      await axios
        .post(BaseUrl + LOGOUT,{
          token:token
        })
        .then(res => {
          dispatch(GetToken(''));
          GoToLogin(navigation);
        })
        .catch(err => {
          alert(err);
        });
    } catch (err) {
      alert(err);
    }
  };
};
