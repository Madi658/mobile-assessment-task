//import liraries
import React, { Component } from 'react';
import { View, Text,ActivityIndicator } from 'react-native';
import { styles } from './style';
// create a component
const Indicater = ({color,size}) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

// define your styles

//make this component available to the app
export default Indicater;
