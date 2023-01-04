import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.setItem('username', '');
    navigation.replace('Login');
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={() => logout()}>
        <Text style={styles.buttonText}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 24,
    width: '60%',
    marginTop: 20,
    backgroundColor: 'white',
  },
  errorText: {
    fontSize: 10,
    lineHeight: 14,
    color: 'red',
    marginTop: -6,
    marginBottom: 4,
  },
  text: {
    fontSize: 26,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 15,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
