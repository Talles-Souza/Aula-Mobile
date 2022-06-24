import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Login from './pages/login';

const StackNavigation = createNativeStackNavigator();

export default () => {
    return (
        <Login />
    );
    // return (
    //     <NavigationContainer>
    //         <StackNavigation.Navigator>
    //             <StackNavigation.Screen
    //                 name='Login'
    //                 component={Login}
    //             />
    //             <StackNavigation.Screen
    //                 name='Home'
    //                 component={Home}
    //             />
    //         </StackNavigation.Navigator>
    //     </NavigationContainer>
    );
}