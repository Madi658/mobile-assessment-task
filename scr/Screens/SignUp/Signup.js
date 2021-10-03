//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../Components/Button/Botton';
import Input from '../../Components/InputField/input';
import {styles} from './style';
import {SignUpMethod} from './modules';
import {useDispatch, useSelector} from 'react-redux';
import Indicater from '../../Components/Loading/ActivityIndicater';

// create a component
const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState(null);
  const [CPassword, SetCPassword] = useState(null);
  const {isLoading} = useSelector(state => state.RejisterStore);
  const CondishionalMethod = () => {
    if (Email == '' || Password == null || CPassword == null)
      alert('Please fill all fields');
    else if (Password !== CPassword) alert('Your Password Dose not match');
    else if (Password <=5 ) alert('Your Password should be More then 5');
    else dispatch(SignUpMethod(navigation, Email, Password, CPassword));
  };
  return (
    <View style={styles.container}>
      <Input
        Onpress={SetEmail}
        placeHolder="Enter your Email"
        secure={false}
        editAble={!isLoading}
      />
      <Input
        Onpress={SetPassword}
        placeHolder="Enter your Password"
        secure={true}
        editAble={!isLoading}
      />
      <Input
        Onpress={SetCPassword}
        placeHolder="Confirm your Password"
        secure={true}
        editAble={!isLoading}
      />
      {isLoading ? (
        <Indicater color="white" size="small" />
      ) : (
        <Button Onpress={CondishionalMethod} text="Create Account" disable={isLoading} />
      )}
    </View>
  );
};

export {Signup};
