import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './AppStack';


export const RootNavigator = () => {

    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};
