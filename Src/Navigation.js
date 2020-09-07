import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import CountryDetails from './CountryDetails'
import CapitalDetails from './CapitalDetails'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
         
          headerTintColor: 'green',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        <Stack.Screen name="CapitalDetails" component={CapitalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;