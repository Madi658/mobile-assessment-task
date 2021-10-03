import {BaseUrl, CREATE_TODO_LIST} from '../../EndPoints/EndPoints';
import { ToDosuccess } from '../Dashbord/core/action';
export const GoBack = navigation => {
  navigation.goBack();
};

export const CreateToDoMethod = (token, Title, Description,ToDo,navigation) => {
  return async dispatch => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token}`);

      var formdata = new FormData();
      formdata.append('title', Title);
      formdata.append('description', Description);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(BaseUrl+CREATE_TODO_LIST, requestOptions)
        .then(response => response.json())
        .then(result => {
            dispatch(ToDosuccess([result.item,...ToDo]))
        })
        .catch(error => {
          if (error == 'Error: Request failed with status code 401') {
            alert('failed');
            alert('Session Expired');
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }
        });
    } catch (err) {
      alert(err);
    }
  };
};
