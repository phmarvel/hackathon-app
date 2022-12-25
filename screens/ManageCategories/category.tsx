
import React from 'react';
import {
  VStack,
  FormControl,
  Text,
  Center,
  Heading,
  Spacer,
  HStack,
  IconButton, Button, Flex

} from 'native-base';
import { Box } from 'native-base';
import { Input, ModalButton } from '../../components/Form';
import { MaterialIcons } from '@expo/vector-icons'
import CategoryField from './categoryField';
import { useTheme } from 'native-base';

export default ({ item,
  OnCreateCategoryField,
  OnDeleteCategoryField,
  OnDeleteCategory,
  OnChangeCategoryName,
  OnChangeCategoryFieldName,
  OnChangeCategoryFieldType,
  OnChangeCategoryTitleFieldId
}:
  {
    item: any,
    OnCreateCategoryField: any,
    OnDeleteCategoryField: any,
    OnDeleteCategory: any,
    OnChangeCategoryName: any,
    OnChangeCategoryFieldName: any,
    OnChangeCategoryFieldType: any,
    OnChangeCategoryTitleFieldId: any
  }) => {

  const [showDropDown, setShowDropDown] = React.useState(false);
  const {
    colors
  } = useTheme();

  const titleField = item.fields.find((field: any) => field.id == item.titleFieldId)
  const onSelectValue = (value: any) => {

    OnChangeCategoryTitleFieldId(item.id, value)
  }

  return (
    <Box bg="blueGray.50" p="3" rounded="8" m={'1'} minW={350} flex={1} >

      <Flex>
        <Text fontWeight="medium" fontSize="16">
          {item.name}
        </Text>
        <Input label='Category Name' value={item.name} onChangeText={(text) => OnChangeCategoryName(item, text)} />

        {
          item.fields?.length > 0 && item.fields.map((field: any) => <CategoryField
            key={'field' + field.id}
            item={item} field={field}
            OnChangeCategoryFieldName={OnChangeCategoryFieldName}
            OnChangeCategoryFieldType={OnChangeCategoryFieldType}
            OnDeleteCategoryField={OnDeleteCategoryField} />)
        }

        <ModalButton
          mode={'outlined'}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={item.titleFieldId}
          setValue={onSelectValue}
          customAnchorText={"Title Field: " + (titleField?.id ? (titleField?.name ?? 'UNNAMED FIELD') : 'UNSELECTED FIELD')}

          list={item.fields?.length > 0 ? item.fields.map(((field: any) => {
            return {
              label: field.name,
              value: field.id,
            }
          })) : []}


        />
        <HStack space={2} mt={3} >
          <Button onPress={() => OnCreateCategoryField(item.id)} size={"md"} variant="outline">
            ADD NEW FIELD
          </Button>
          <Button onPress={() => OnDeleteCategory(item.id)} size={"md"} variant="outline" borderColor={"white"} leftIcon={<MaterialIcons name="delete" color={colors.primary[700]} size={16} />}>
            Remove
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}