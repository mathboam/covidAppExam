import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default function MyButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...props.style,
      }}>
      <Text style={{color: '#ffffff'}}>{props.text}</Text>
    </TouchableOpacity>
  );
}
