import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import AboutScreen from '@screens/AboutScreen';

export type RootStackParamList = {
  Login: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootNavigation = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='About'
        component={AboutScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
};

export default RootNavigation;