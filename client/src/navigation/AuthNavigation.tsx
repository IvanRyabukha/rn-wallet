import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '@screens/SigninScreen';
import SignupScreen from '@screens/SignupScreen';
import ConfirmEmailScreen from '@screens/ConfirmEmailScreen';
import { useAuth } from 'providers/AuthProvider';

export type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
  ConfirmEmail: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen
            name="Signin"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : !user.emailVerified ? (
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmailScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
