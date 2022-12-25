
import React from 'react';
import {
    FlatList, Flex, View

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

    return category?.fields?.length > 0 ? category.fields.map((item: any) => {

        let value = values[item.id];
        let Component = null
        switch (item.type) {
            case 'TEXT':
                Component = <Text label={item.name} value={value} onChangeText={(text) => onChangeValue(item.id, text)} />;
                break;
            case 'NUMBER':
                Component = <Number label={item.name} value={value} onChangeText={(text) => onChangeValue(item.id, text)} />;
                break;
            case 'DATE':
                Component = <Date label={item.name} value={value} onChange={(date: any) => onChangeValue(item.id, date)} />;
                break;
            case 'CHECKBOX':

                Component = <Checkbox label={item.name} value={value} onChange={(val) => onChangeValue(item.id, val)} />;
                break;

            default:
                return null;
        }

        return <Flex marginY={"3"}>
            {Component}
        </Flex>
    }) : null;
}