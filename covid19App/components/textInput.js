import React from 'react';
import { TextInput } from 'react-native';

export default function MyTextInput(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      keyboardAppearance={'light'}
      keyboardType={props.type}
      style={props.style}
      value={props.value}
      maxLength={props.max}
      onChangeText={props.onChangeText}
      placeholderTextColor={props.placeColor}
    />
  );
}
