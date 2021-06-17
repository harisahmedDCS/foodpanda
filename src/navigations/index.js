import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const Navigator = () => {
    const RootNavigator = createStackNavigator();
    return (
    <NavigationContainer>
        <RootNavigator.Navigator>
            <RootNavigator.Screen name="Main" component={AppNavigator}
            options={{
                headerShown: false
            }}/>
            <RootNavigator.Screen  name="sss" component={AuthNavigator}/>
        </RootNavigator.Navigator>
   </NavigationContainer>
    )
}

export default Navigator
