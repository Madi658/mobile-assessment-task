//import liraries
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './style';
// create a component
const Input = ({Onpress, placeHolder, secure,editAble,numberOfLines}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.Inpt}
        placeholder={placeHolder}
        secureTextEntry={secure}
        onChangeText={Onpress}
        editable={editAble}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default Input;
