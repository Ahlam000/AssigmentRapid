import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const StartScreen = ({navigation}) => {
  useEffect(() => {
    checkStorage();
  }, []);
  const checkStorage = async () => {
    setTimeout(async () => {
      const name = await AsyncStorage.getItem('username');
      if (name == 'admin' || name == 'client') {
        navigation.replace('BottomAdminScreens');
      } else if (name == 'salesman') {
        navigation.replace('BottomSalesmanScreens');
      } else {
        navigation.navigate('Login');
      }
    }, 1000);
  };
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}></View>
  );
};
export default StartScreen;
