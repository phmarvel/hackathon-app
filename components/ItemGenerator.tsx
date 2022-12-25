
import React from 'react';
import {
    FlatList

} from 'native-base';
import { Box } from 'native-base';
import { Text, Number, Checkbox, Date } from './FieldTypes'
import { useTheme } from 'native-base';
import { putItem } from '../actions/items';
import { useDispatch } from 'react-redux';

export default ({ values, category,
}:
    {
        values: any,
        category: any,
    }) => {

    const {
        colors
    } = useTheme();
    const dispatch = useDispatch()

    const onChangeValue = (fieldId: any, value: any) => {

        dispatch(putItem({ ...values, [fieldId]: value }))

    }

    return (
        <FlatList data={category.fields ?? []} renderItem={({
            item
        }: { item: any }) => {

            let value = values[item.id];
            switch (item.type) {
                case 'TEXT':
                    return <Text label={item.name} value={value} onChangeText={(text) => onChangeValue(item.id, text)} />;
                case 'NUMBER':
                    return <Number label={item.name} value={value} onChangeText={(text) => onChangeValue(item.id, text)} />;
                case 'DATE':
                    return <Date label={item.name} value={value} onChange={(date: any) => onChangeValue(item.id, date)} />;
                case 'CHECKBOX':

                    return <Checkbox label={item.name} value={value} onChange={(val) => onChangeValue(item.id, val)} />;

                default:
                    return null;
            }
        }}
        />
    );
}