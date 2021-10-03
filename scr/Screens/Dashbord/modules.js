import axios from 'axios';
import {BaseUrl, GET_TODO_LIST} from '../../EndPoints/EndPoints';
import {GetToken} from '../Login/core/action';
import {ToDofailed, ToDoLoading, ToDosuccess} from './core/action';
export const Search = (SetToDoData, ToDo, i) => {
  let Filtered = ToDo.filter(e => e.title.includes(i));
  SetToDoData(Filtered);
};
export const GoToCreateToDo = navigation => {
  navigation.navigate('Create');
};
export const GoToLogin = navigation => {
  navigation.reset({
    index: 0,
    routes: [{name: 'Login'}],
  });
};
export const GetToDoMethod = (token, navigation) => {
  return async dispatch => {
    dispatch(ToDoLoading());
    try {
      await axios
        .get(BaseUrl + GET_TODO_LIST, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          dispatch(ToDosuccess(res.data.items.data));
        })
        .catch(err => {
          dispatch(ToDofailed(err));
          if (err == 'Error: Request failed with status code 401') {
            alert('Session Expired');
            dispatch(GetToken(''));
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }
        });
    } catch (err) {
      alert(err, 'i am here 2');
    }
  };
};
