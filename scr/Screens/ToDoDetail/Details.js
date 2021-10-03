//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../Components/Button/Botton';
import {DeleteMethod} from './modules';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './style';
// create a component

const Details = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.LoginStore);
  const {ToDo} = useSelector(state => state.ToDoStore);
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Title: {item.title}</Text>

        <View style={styles.DesContainer}>
          <Text style={styles.Des}>{item.description}</Text>
        </View>
        <Button Onpress={() => {}} text="Update" editAble={true} />
        <Button
          Onpress={() => {
            dispatch(DeleteMethod(navigation, item.id, ToDo, token));
          }}
          text="Delete"
          editAble={true}
        />
      </View>
    </View>
  );
};

export default Details;
