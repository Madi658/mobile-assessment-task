//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Route } from './scr/Screens/Navigation/Route';
import {Provider} from 'react-redux';
import {persister, store} from './redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import { NotificationChannal,NotificationServices } from './Notificaton/modules';
// create a component
const App = () => {
  useEffect(()=>{
    NotificationServices();
    SplashScreen.hide();
    NotificationChannal();
  },[]);
  return (
    <View style={{flex:1}}>
        <Provider store={store}>
        <PersistGate persistor={persister}>
      <Route/>
      </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
