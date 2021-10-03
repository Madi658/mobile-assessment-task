//import liraries
import React, {Component, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../../Components/Button/Botton';
import Input from '../../Components/InputField/input';
import PushNotification from 'react-native-push-notification';
import {GoToSignUp, LoginMethod,} from './modules';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import Indicater from '../../Components/Loading/ActivityIndicater';
import { Notify } from '../../../Notificaton/modules';

// create a component

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState(null);
  const {isLoading} = useSelector(state => state.LoginStore);
  const CondishionalMethod=()=>{
    if (Email == '' || Password == null) alert('Please fill all fields');
    else { dispatch(LoginMethod(navigation, Email, Password)) }
  }

  return (
    <View style={styles.container}>
      <Input Onpress={SetEmail} placeHolder="Enter your Email" secure={false} 
        editAble={!isLoading}
      />
      <Input
        Onpress={SetPassword}
        placeHolder="Enter your Password"
        secure={true}
        editAble={!isLoading}
      />
      {isLoading ? (
        <Indicater color="black" size="large" />
      ) : (
        <Button
          Onpress={CondishionalMethod}
          text="Login"
          editAble={isLoading}
          numberOfLines={1}
        />
      )}
      <Button
        Onpress={() => {
          GoToSignUp(navigation);
        }}
        text="Create Account"
        disable={isLoading}
      />
    </View>
  );
};

export {Login};
