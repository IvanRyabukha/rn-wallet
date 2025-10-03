import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import CreateTransactionScreen from '@screens/CreateTransactionScreen';

export type AppStackParamList = {
  Home: undefined;
  CreateTransaction: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateTransaction"
        component={CreateTransactionScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
