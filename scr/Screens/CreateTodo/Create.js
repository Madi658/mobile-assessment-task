import React, {Component, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../Components/Button/Botton';
import Input from '../../Components/InputField/input';
import {CreateToDoMethod, GoBack} from './modules';
import {styles} from './style';

const Create = ({navigation}) => {
  const dispatch = useDispatch();
  const [Title, SetTitle] = useState('');
  const [Discription, SetDiscription] = useState('');
  const {token} = useSelector(state => state.LoginStore);
  const {ToDo} = useSelector(state => state.ToDoStore);
  const Services = () => {
    dispatch(CreateToDoMethod(token,Title,Discription,ToDo,navigation));
    GoBack(navigation);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Create}>Create ToDo</Text>
      <Input
        Onpress={SetTitle}
        placeHolder="Title"
        secure={false}
        editAble={true}
      />
      <Input
        Onpress={SetDiscription}
        placeHolder="Discription"
        secure={false}
        editAble={true}
      />
      <Button Onpress={Services} text="Create" editAble={true} />
    </View>
  );
};

export default Create;
