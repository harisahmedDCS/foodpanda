import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import About from '../screens/About'
import Restaurant from '../screens/Restaurants'

const AppNavigator = () => {
    const appNavigator = createStackNavigator();
    return (
         
              <appNavigator.Navigator>
                  <appNavigator.Screen name="Home" component={Home}
                  options={{
                    headerShown: false
                  }}/>
                  <appNavigator.Screen name="About" component={About}
                      options={{
                        headerShown: false
                      }}/>
                     <appNavigator.Screen name="Restaurant" component={Restaurant}
                      options={{
                        headerShown: false
                      }}
                      />
              </appNavigator.Navigator>
       
    )
}

export default AppNavigator
