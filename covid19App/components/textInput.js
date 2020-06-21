import React from 'react';
import {TextInput} from 'react-native';

export default function MyTextInput(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      keyboardAppearance={'light'}
      keyboardType={props.type}
      style={{
        height: 40,
        backgroundColor: '#ffffff',
        textAlign: 'right',
        padding: 10,
        zIndex: 2,
        marginTop: 40,
      }}
      value={props.value}
      maxLength={props.max}
      onChangeText={props.onChangeText}
    />
  );
}
