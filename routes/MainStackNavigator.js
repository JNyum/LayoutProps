import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';
import Homework from '../screens/Homework';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Homework'
            >
                <Stack.Screen
                    name = "Home"
                    component={Home}
                    options={{title:'Home Screen'}}
                />

                <Stack.Screen
                    name = "Homework"
                    component={Homework}
                    options={{title:'Homework Screen'}}
                />

                <Stack.Screen
                    name = "Layout"
                    component={Layout}
                    options={{title:'Layout Screen'}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
    

}

export default MainStackNavigator;