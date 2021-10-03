//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {GetToDoMethod, GoToCreateToDo, GoToLogin,Search} from './modules';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {GetToken} from '../Login/core/action';
import Button from '../../Components/Button/Botton';
import {ToDoCard} from '../../Components/ToDoCard/ToDoCard';
import Input from '../../Components/InputField/input';
const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.LoginStore);
  const {ToDo} = useSelector(state => state.ToDoStore);
  const [ToDoData,SetToDoData]=useState([]);
  console.log('Token',token);
  const LogOutServices = () => {
    dispatch(GetToken(''));
    GoToLogin(navigation);
  };
  useEffect(()=>{
   SetToDoData(ToDo);
  },[ToDo]);
  useEffect(() => {
    dispatch(GetToDoMethod(token, navigation));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.search}>Search</Text>
        <Input
          Onpress={(i)=>{Search(SetToDoData,ToDo,i)}}
          // Onpress={(i)=>console.log(i)}
          placeHolder="Search"
          secure={false}
          editAble={true}
        />
        <FlatList
          data={ToDoData}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => {
            return <ToDoCard item={item} navigation={navigation} />;
          }}
        />
        <Button
          Onpress={() => {
            GoToCreateToDo(navigation);
          }}
          text="Create New Todo"
          editAble={true}
        />
        <Button Onpress={LogOutServices} text="LogOut" editAble={true} />
      </ScrollView>
    </SafeAreaView>
  );
};
export {MainScreen};
