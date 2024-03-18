import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
import React from 'react';
import {AllProductsScreen, ProductListScreen} from '@src/containers';

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AllProductsScreen" component={AllProductsScreen} />
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
