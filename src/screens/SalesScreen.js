import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SalesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Sales Screen</Text>
    </View>
  );
};
export default SalesScreen;
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
