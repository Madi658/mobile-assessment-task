//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { MainScreen } from '../Dashbord/MainScreen';
import { Welcome } from '../WelcomScreen/WelcomeScreen';
import { Login } from '../Login/Login';
import { Signup } from '../SignUp/Signup';
import Create from '../CreateTodo/Create';
import {useSelector} from 'react-redux';
import Details from '../ToDoDetail/Details';

const MainStack = createStackNavigator();

// create a component
const Route = () => {
const {token} = useSelector(state => state.LoginStore);
  let routename=token !== '' ? 'MainScreen' : 'Welcome';
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={routename} screenOptions={{headerShown:true,}}>
        <MainStack.Screen name="MainScreen" component={MainScreen} />
        <MainStack.Screen name="Welcome" component={Welcome} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Signup" component={Signup} />
        <MainStack.Screen name="Create" component={Create} />
        <MainStack.Screen name="Details" component={Details} />
        
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export  {Route};
