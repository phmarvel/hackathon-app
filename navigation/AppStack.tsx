import * as React from 'react';
import { DashboardScreen, CategoryDetailScreen, ManageCategoriesScreen } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { getCategories } from '../selectors/categories';




const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
    const categories = useSelector(getCategories);

    return (
        <Drawer.Navigator
            initialRouteName='Dashboard'
        >
            <Drawer.Screen name='Dashboard' options={{ title: 'Dashboard' }} component={DashboardScreen} />

            {
                categories?.length > 0 && categories.map((category: any) => <Drawer.Screen key={`CategoryDetail_${category.id}`} initialParams={{
                    id: category.id
                }} name={`CategoryDetail_${category.id}`} options={{ title: category.name }} component={CategoryDetailScreen} />)
            }
            <Drawer.Screen name='ManageCategories' options={{ title: 'Manage Categories' }} component={ManageCategoriesScreen} />

        </Drawer.Navigator>
    );
};