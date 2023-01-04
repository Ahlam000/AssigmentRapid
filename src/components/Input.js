import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 63,
    position: 'relative',
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -5,
    left: 15,
    padding: 5,
    zIndex: 50,
  },
  labelContainerOnBlur: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -5,
    left: 25,
    padding: 5,
    zIndex: 50,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    justifyContent: 'flex-end',
    height: 24,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'black',
  },
  label: {
    color: 'black',
    fontSize: 12,
  },
});

const Input = ({label, style, ...props}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [color, setColor] = useState(false);
  return (
    <View style={styles.container}>
      {color ? (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ) : null}
      <TextInput
        placeholderTextColor={'gray'}
        style={
          color
            ? [styles.textInput, {borderColor: 'black', paddingVertical: 8}]
            : styles.textInput
        }
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={!color ? label : ''}
        keyboardType={props.keyboardType}
        maxLength={
          props.keyboardType == 'number-pad'
            ? props.maxLength
              ? props.maxLength
              : 10
            : null
        }
        onBlur={() => {
          setColor(false);
          props.onBlur;
          props.setError('');
        }}
        numberOfLines={props.multiline ? 6 : 1}
        multiline={props.multiline ? true : false}
        setError={props.setError}
        onFocus={() => {
          setColor(true);
          props.onFocusVisible ? setOnFocusVisible(true) : null;
          props.onFocus;
        }}
      />
    </View>
  );
};

export default Input;
