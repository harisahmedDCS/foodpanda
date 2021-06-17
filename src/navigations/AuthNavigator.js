import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../screens/Login';
const AuthNavigator = () => {
    const authNavigator = createStackNavigator();
    return (
      
            <authNavigator.Navigator>
                {/* <authNavigator.Screen name="Login" component={Login}/> */}
            </authNavigator.Navigator>
      
    )
}

export default AuthNavigator
