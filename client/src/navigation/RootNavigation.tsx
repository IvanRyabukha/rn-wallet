import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import { AuthStackParamList } from './AuthNavigation';
import AppNavigation, { AppStackParamList } from './AppNavigation';
import { useAuth } from 'providers/AuthProvider';
import HomeScreen from '@screens/HomeScreen';

export type RootStackParamList = {
  Auth: AuthStackParamList;
  App: AppStackParamList;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootNavigation = () => {
  const navigation = useNavigation<NavigationProp>();
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator>
      {!user || !user.emailVerified ? (
        <Stack.Screen
          name="Auth"
          component={AuthNavigation}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="App"
          component={AppNavigation}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
