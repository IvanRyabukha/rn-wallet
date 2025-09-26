import React from 'react';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { RootStackParamList } from '@navigation/RootNavigation';

import { COLORS } from '@constants/colors';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('About')}>
        <Text>About</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginTop: 10,
  }
});

export default LoginScreen