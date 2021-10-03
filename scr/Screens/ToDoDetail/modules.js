import axios from 'axios';
import {BaseUrl, DELETE_END_POINT} from '../../EndPoints/EndPoints';
import {GoBack} from '../CreateTodo/modules';
import {ToDosuccess} from '../Dashbord/core/action';
import {GetToken} from '../Login/core/action';

export const DeleteMethod = (navigation, id, ToDo, token) => {
  return async dispatch => {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${token}`);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(BaseUrl + DELETE_END_POINT + `${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        let filterd = ToDo.filter(i => i.id !== id);
        dispatch(ToDosuccess(filterd));
        alert(result.message);
        GoBack(navigation);
      })
      .catch(error => {
        if (error == 'Error: Request failed with status code 401') {
          alert('Session Expired');
          dispatch(GetToken(''));
        } else {
          alert(error);
        }
      });
  };
};
