//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';

// create a component
const ToDoCard = ({item,navigation}) => {
    const GoToDetails=(item)=>{
        navigation.navigate('Details',{item})
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={()=>{GoToDetails(item)}}>
            <Text>Title-{item.title}</Text>
            <Text>Discription-{item.description}</Text>
            </TouchableOpacity>
        </View>
    );
};


//make this component available to the app
export  {ToDoCard};
