
import React from 'react';
import {
  FormControl,
  Text,
  Center,
  ScrollView,
  FlatList,
  HStack,
  View,

} from 'native-base';
import Category from './Category';

function CategoryDetail({ route }: { route: any }) {
  const categoryId = route.params?.id

  return (
    <Category categoryId={categoryId} />

  );
}
export default CategoryDetail