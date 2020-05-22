import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cart from 'src/screens/Cart';
import ProductDetail from './src/screens/ProductDetail';
import Products from './src/screens/Products';
import { RootStackParamList } from 'src/types';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator<RootStackParamList>();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Products" component={Products} />
      <MainStack.Screen name="ProductDetail" component={ProductDetail} />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Cart" component={Cart} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackScreen;
