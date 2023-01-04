import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Order Screen</Text>
    </View>
  );
};
export default OrderScreen;
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
