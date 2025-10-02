import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '@navigation/RootNavigation';
import { AuthProvider } from 'providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
