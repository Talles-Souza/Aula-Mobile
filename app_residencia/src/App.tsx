import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import Categorias from './pages/categorias';


const TabNavigation = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <TabNavigation.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#1395d6d6', borderBottomWidth: 0, }
        }}>
            <TabNavigation.Screen name='HomeTabScreen' component={Home} />
            <TabNavigation.Screen name='CategoriasTabScreen' component={Categorias} />
        </TabNavigation.Navigator>
    );
}

const StackNavigation = createNativeStackNavigator();

export default () => {
    // return (
    //     //<Home />
    //     //<Login />
    // );
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen
                    name='Login'
                    component={Login}
                />
                <StackNavigation.Screen
                    name='Home'
                    component={BottomTabNavigation}
                />
                <StackNavigation.Screen
                    name='Categorias'
                    component={Categorias}
                />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}