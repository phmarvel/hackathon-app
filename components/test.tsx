import React from 'react';
import {
  VStack,
  Input,
  Button,
  FormControl,
  Text,
} from 'native-base';
import { Date } from './FieldTypes';
import { DropDown, ModalButton } from './Form';
import { useSelector } from 'react-redux';
import { getCategories } from '../selectors/categories';

function FormHookExample() {

  const [text, setText] = React.useState("");
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [gender, setGender] = React.useState<string>('');
  const categories = useSelector(getCategories);


  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];

  return (
    <VStack width="80%" space={4}>

      <Text>Categories : {categories?.length}</Text>
      <ModalButton
        label={'Gender'}
        mode={'outlined'}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={gender}
        setValue={setGender}
        list={genderList}
      />
      <FormControl>

        <Date
        />
      </FormControl>

    </VStack>
  );
}
export default FormHookExample