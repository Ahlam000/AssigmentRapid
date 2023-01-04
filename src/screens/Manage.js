import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ManageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Manage Screen</Text>
    </View>
  );
};
export default ManageScreen;
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
