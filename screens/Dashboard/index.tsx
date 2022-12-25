
import React from 'react';
import {
  Center, FlatList, Flex, Text


} from 'native-base';
import { useSelector } from 'react-redux';
import { getCategories } from '../../selectors/categories';
import Category from '../CategoryDetail/Category';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

function ManageCategories() {
  const categories = useSelector(getCategories);
  const navigation = useNavigation()

  if (categories.length == 0)
    return <Flex flex={1} alignItems={"center"} justifyContent="center" m={10}>
      <Text color={"#777"} fontWeight="normal" fontSize="20" mb="5">There Is No Categories</Text>
      <Button text={"Manage Categories"} onPress={() => {
        navigation.navigate("ManageCategories")
      }} />
    </Flex>

  return (
    <FlatList key="DashboardList" listKey="DashboardList" data={categories ?? []} renderItem={({
      item
    }: { item: any }) => <Category key={'category' + item.id} categoryId={item.id} />}
      keyExtractor={(item, index) => 'category' + index.toString()}


    />

  );
}
export default ManageCategories