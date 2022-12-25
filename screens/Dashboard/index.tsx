
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
    <FlatList key="DashboardList" listKey="DashboardList" data={categories ?? []} renderItem={({
      item
    }: { item: any }) => <Category key={'category' + item.id} categoryId={item.id} />}
      keyExtractor={(item, index) => 'category' + index.toString()}


    />

  );
}
export default ManageCategories