import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
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
const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.button}
      onPress={() => props.onPress()}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
