import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import NewTransactionScreen from '@screens/NewTransactionScreen';

export type AppStackParamList = {
  Home: undefined;
  NewTransaction: undefined;
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
        name="NewTransaction"
        component={NewTransactionScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
