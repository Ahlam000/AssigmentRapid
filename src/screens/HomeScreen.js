import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.setItem('username', '');
    navigation.replace('Login');
  };
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
