import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello More Screen</Text>
    </View>
  );
};
export default MoreScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});
