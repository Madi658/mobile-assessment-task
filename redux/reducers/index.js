import {combineReducers} from 'redux';
import { ToDoStore } from '../../scr/Screens/Dashbord/core/reducer';
import { LoginStore } from '../../scr/Screens/Login/core/reducer';
import { RejisterStore } from '../../scr/Screens/SignUp/core/reducer';
export default combineReducers({
  RejisterStore:RejisterStore,
  LoginStore:LoginStore,
  ToDoStore:ToDoStore
});
