
import React from 'react';
import {
    Box,
    Text,
    HStack,
    Button,
    Flex

} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'native-base';
import ItemGenerator from '../../components/ItemGenerator';

export default ({ item, category,
    OnDeleteItem,
}:
    {
        item: any,
        category: any,
        OnDeleteItem: any,
    }) => {

    const {
        colors
    } = useTheme();

    const renderTitleFieldValue = () => {
        let value = item[category.titleFieldId];
        const field = category?.fields?.find((s: any) => s.id == category.titleFieldId)
        if (!field)
            return 'Unnamed Field'
        switch (field.type) {
            case 'TEXT':
                return !value ? 'Unnamed Field' : value;
            case 'NUMBER':
                return !value && value != 0 ? 'Unnamed Field' : value;
            case 'DATE':
                if (!(value instanceof Date)) {
                    return ''
                }
                return value?.toLocaleDateString("en-US") ?? 'Unnamed Field';
            case 'CHECKBOX':
                return (typeof value == "boolean" ? value : false) ? 'True' : 'False';

            default:
                return null;
        }
    }


    return (
        <Box bg="blueGray.50" p="3" rounded="8" m={'1'} minW={280} flex={1} >

            <Flex>

                <Text fontWeight="medium" fontSize="16">
                    {renderTitleFieldValue()}
                </Text>

                <ItemGenerator category={category} values={item} />


                <HStack space={2} mt={3}>

                    <Button onPress={() => OnDeleteItem(item.id)} size={"md"} variant="outline" borderColor={"white"} leftIcon={<MaterialIcons name="delete" color={colors.primary[700]} size={16} />}>
                        Remove
                    </Button>
                </HStack>

            </Flex>
        </Box>

    );
}