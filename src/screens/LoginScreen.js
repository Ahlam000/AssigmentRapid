import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../components/Input';

const LoginScreen = ({route, navigation}) => {
  const [name, setName] = useState('');

  const [nameErr, setNameErr] = useState('');

  const onLogin = async () => {
    if (name.trim() == '' || name == '') {
      setNameErr('please enter your  username');
      return;
    }
    if (name == 'admin' || name == 'client') {
      setNameErr('');
      const username = await AsyncStorage.setItem('username', name);
      navigation.replace('MyStack');
    } else if (name == 'salesman') {
      setNameErr('');
      const username = await AsyncStorage.setItem('username', name);
      navigation.replace('MyStack2');
    } else {
      setNameErr('');
      alert('No matching user found! Please enter correct details');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.container}>
        <Input
          label="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
          setError={setNameErr}
        />
        <Text style={styles.errorText}>{nameErr}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={() => onLogin()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
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
