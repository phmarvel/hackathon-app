
import React from 'react';
import {
    FormControl,
    Text,
    Center,
    ScrollView,
    FlatList,
    HStack,
    Button,

} from 'native-base';
import { Dimensions } from 'react-native';
import { getCategories } from '../../selectors/categories';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../selectors/items';
import { addItem, deleteItem } from '../../actions/items';
import CategoryItem from './item';

function Category({ categoryId }: { categoryId: any }) {
    const dispatch = useDispatch()
    const categories = useSelector(getCategories);
    const items = useSelector(getItems);
    const allowMultiColumns = Dimensions.get('screen').width > 500

    const category = categories.find((s: any) => s.id == categoryId)
    const categoryItems = items.filter((s: any) => s.categoryId == categoryId)

    const OnCreateItem = () => {
        dispatch(addItem(categoryId, {}))
    }
    const OnDeleteItem = (id: any) => {
        dispatch(deleteItem(id))
    }

    return (
        <Center flex={1} >


            <HStack m={2} justifyContent="space-between" alignItems={"center"}>
                <Text fontWeight="medium" fontSize="20" flex={3}>
                    {category?.name}
                </Text>
                <Button size={"md"} flex={2} variant="solid" onPress={OnCreateItem}>
                    ADD NEW ITEM
                </Button>
            </HStack>
            {
                allowMultiColumns ? <FlatList key={'CategoryDetail_Multi'} data={categoryItems ?? []} numColumns={2} renderItem={({
                    item
                }: { item: any }) => <CategoryItem
                        key={'item' + item.id}
                        item={item}
                        category={category}
                        OnDeleteItem={OnDeleteItem}
                    />}
                    listKey="categories"
                    style={{ width: '100%' }}
                /> : <FlatList key={'CategoryDetail_Single'} data={categoryItems ?? []} renderItem={({
                    item
                }: { item: any }) => <CategoryItem
                        key={'item' + item.id}
                        item={item}
                        category={category}
                        OnDeleteItem={OnDeleteItem}
                    />}
                    listKey="categories"
                    style={{ width: '100%' }}
                />
            }


        </Center>

    );
}
export default Category