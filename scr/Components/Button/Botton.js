//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { styles } from './style';
styles
// create a component
const Button = ({Onpress,text,disable}) => {
    return (
        <View style={styles.container}>
           <TouchableOpacity style={styles.Btn}
           onPress={Onpress}
           disabled={disable}
           >
               <Text>{text}</Text>
           </TouchableOpacity>
        </View>
    );
};

export default Button;
