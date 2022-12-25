import React from 'react';
import { Input } from '../Form';

export default ({ label, value, onChangeText }: { label: string; value: string, onChangeText?: ((text: string) => void) | undefined }) => {


  return (
    <Input
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
}