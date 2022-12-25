import React from 'react';
import { TextInput } from 'react-native-paper';


export default ({ label, value, keyboardType, onChangeText }:
  {
    label: string;
    value: string,
    keyboardType?: any,
    onChangeText?: ((text: string) => void) | undefined
  }) => {


  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
      keyboardType={keyboardType}
      style={{ flexGrow: 1 }}
    />
  );
}