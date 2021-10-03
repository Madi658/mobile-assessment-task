//import liraries
import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import { resetroute } from './modules';
import {useDispatch, useSelector} from 'react-redux';
import { styles } from './style';
// create a component
const Welcome = () => {
const navigation = useNavigation();
useEffect(() => {
        setTimeout(() => {
            let routename='Login'
            let screenname=routename;
          resetroute(routename,screenname,CommonActions,navigation);
        }, 2000);
      }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>WellCome</Text>
        </View>
    );  
};



export  {Welcome};
