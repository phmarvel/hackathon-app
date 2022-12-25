
import React from 'react';
import {

  HStack,
  IconButton

} from 'native-base';
import { Input, ModalButton } from '../../components/Form';
import { MaterialIcons } from '@expo/vector-icons'

export default ({ item, OnDeleteCategoryField, field,
  OnChangeCategoryFieldName,
  OnChangeCategoryFieldType }: {
    item: any, field: any, OnDeleteCategoryField: any,
    OnChangeCategoryFieldName: any,
    OnChangeCategoryFieldType: any
  }) => {

  const [showDropDown, setShowDropDown] = React.useState(false);

  const TypesList = [
    {
      label: 'TEXT',
      value: 'TEXT',
    },
    {
      label: 'NUMBER',
      value: 'NUMBER',
    },
    {
      label: 'DATE',
      value: 'DATE',
    },
    {
      label: 'CHECKBOX',
      value: 'CHECKBOX',
    },
  ];

  return (
    <HStack space={2} >
      <Input label='Field' value={field.name} onChangeText={(text: any) => OnChangeCategoryFieldName(item.id, field, text)} />
      <ModalButton
        mode={'outlined'}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={field.type}
        setValue={(value) => OnChangeCategoryFieldType(item.id, field, value)}
        list={TypesList}
      />
      <IconButton size={"md"} variant="outline" borderColor={"white"} colorScheme="black" _icon={{
        as: MaterialIcons,
        name: "delete"
      }}

        onPress={() => OnDeleteCategoryField(item.id, field.id)}

      />
    </HStack>

  );
}