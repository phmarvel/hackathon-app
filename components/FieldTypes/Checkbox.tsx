import { HStack, Switch, Text } from 'native-base';
import React from 'react';

export default ({ label, value, onChange }: { label: string; value: boolean, onChange?: (e: any) => void; }) => {

  return (
    <HStack space={4} alignItems="center">
      <Text fontWeight="medium" fontSize="16" color={"black"}>
        {label}
      </Text>
      <Switch size="lg" value={value} onValueChange={onChange} />
    </HStack>
  );
}