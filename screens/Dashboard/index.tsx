
import React from 'react';
import {
  Center, FlatList,


} from 'native-base';
import { useSelector } from 'react-redux';
import { getCategories } from '../../selectors/categories';
import Category from '../CategoryDetail/Category';

function ManageCategories() {
  const categories = useSelector(getCategories);


  return (
    <FlatList data={categories ?? []} renderItem={({
      item
    }: { item: any }) => <Category key={'category' + item.id} categoryId={item.id} />}
    />

  );
}
export default ManageCategories