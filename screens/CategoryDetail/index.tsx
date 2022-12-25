
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
    <ScrollView>
      <Category categoryId={categoryId} />
    </ScrollView>

  );
}
export default CategoryDetail