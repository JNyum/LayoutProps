import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';
import Homework from '../screens/Homework';

const Nav = createStackNavigator();

function MainStackNavigator() {
    return(
        <NavigationContainer>
            <Nav.Navigator
                initialRouteName='Homework'
            >
                <Nav.Screen
                    name = "Home"
                    component={Home}
                    options={{title:'Home Screen'}}
                />

                <Nav.Screen
                    name = "Homework"
                    component={Homework}
                    options={{title:'Homework Screen'}}
                />

                <Nav.Screen
                    name = "Layout"
                    component={Layout}
                    options={{title:'Layout Screen'}}
                />

            </Nav.Navigator>
        </NavigationContainer>
    )
    

}

export default MainStackNavigator;