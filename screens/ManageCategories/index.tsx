
import React from 'react';
import {
  FormControl,
  Text,
  Center,
  ScrollView,
  FlatList,
  HStack,
  Flex,

} from 'native-base';
import Category from './category';
import { Button } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../selectors/categories';
import { addCategory, deleteCategory, putCategory } from '../../actions/categories';
import { addCategoryField, deleteCategoryField, putCategoryField } from '../../actions/categoryFields';
import { Dimensions } from 'react-native';

function ManageCategories() {

  const categories = useSelector(getCategories);
  const dispatch = useDispatch()

  const getCategory = (id: any) => categories.find((s: any) => s.id == id)
  const getField = (categoryId: any, fieldId: any) => getCategory(categoryId)?.fields?.find((s: any) => s.id == fieldId)
  const OnCreateCategory = () => {
    dispatch(addCategory({ name: 'New Category' }))
  }
  const OnDeleteCategory = (id: any) => {
    dispatch(deleteCategory(id))
  }
  const OnChangeCategoryName = (item: any, name: string) => {
    dispatch(putCategory({ ...getCategory(item.id), name: name }))
  }
  const OnChangeCategoryTitleFieldId = (categoryId: any, titleFieldId: string) => {
    let category = getCategory(categoryId);
    dispatch(putCategory({ ...category, fields: category.fields, titleFieldId: titleFieldId }))
  }


  const OnChangeCategoryFieldName = (categoryId: string, item: any, name: string) => {
    dispatch(putCategoryField(categoryId, { ...getField(categoryId, item.id), name: name }))
  }
  const OnChangeCategoryFieldType = (categoryId: string, item: any, type: string) => {
    dispatch(putCategoryField(categoryId, { ...getField(categoryId, item.id), type: type }))
  }
  const OnCreateCategoryField = (categoryId: string) => {
    dispatch(addCategoryField(categoryId, {}))
  }
  const OnDeleteCategoryField = (categoryId: string, fieldId: string) => {
    dispatch(deleteCategoryField(categoryId, fieldId))
  }
  return (
    <Flex flex={1} mt={5}>


      <ScrollView>
        <Flex direction='row' flexWrap={'wrap'} flex={1} justifyContent="space-around">
          {(categories ?? []).map((item: any) => <Category item={item}
            OnCreateCategoryField={OnCreateCategoryField}
            OnDeleteCategoryField={OnDeleteCategoryField}
            OnDeleteCategory={OnDeleteCategory}
            OnChangeCategoryName={OnChangeCategoryName}
            OnChangeCategoryFieldName={OnChangeCategoryFieldName}
            OnChangeCategoryFieldType={OnChangeCategoryFieldType}
            OnChangeCategoryTitleFieldId={OnChangeCategoryTitleFieldId}
            key={'category' + item.id}
          />)}
        </Flex>

      </ScrollView>


      <HStack m={2}>
        <Button size={"md"} flex={1} variant="solid" onPress={OnCreateCategory}>
          ADD NEW CATEGORY
        </Button>
      </HStack>
    </Flex>

  );
}
export default ManageCategories