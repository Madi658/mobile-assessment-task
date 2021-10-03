import axios from 'axios';
import { Notify } from '../../../Notificaton/modules';
import {BaseUrl, REJISTER_END_POINT} from '../../EndPoints/EndPoints';
import {SignUpLoading, SignUpsuccess, SignUpfailed} from './core/action';
export const SignUpMethod = (navigation, Email, Password, CPassword) => {
    return async dispatch => {
        dispatch(SignUpLoading())
      try {
        await axios
          .post(BaseUrl + REJISTER_END_POINT, {
            email: Email,
            password: Password,
            password_confirmation: CPassword,
          })
          .then(res => {
            dispatch(SignUpsuccess(res.data));
            console.log(res.data.message);
            Notify(res.data.message);
            navigation.navigate('Login');
          })
          .catch(err => {
            dispatch(SignUpfailed(err));
            alert(err);
          });
      } catch (err) {
        dispatch(SignUpfailed(err));
        alert(err);
      }
    };
};
