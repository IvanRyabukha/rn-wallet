import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { AuthStackParamList } from '@navigation/AuthNavigation';
import { getAuth } from '@react-native-firebase/auth';

import { COLORS } from '@constants/colors';

type SigninScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signin'
>;

interface SigninScreenProps {
  navigation: SigninScreenNavigationProp;
}

const SigninScreen: React.FC<SigninScreenProps> = ({ navigation }) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await getAuth().signInWithEmailAndPassword(emailAddress, password);
      if (!userCredential.user?.emailVerified) {
        Alert.alert('Verifi your email!');
      }
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View>
      <Text>Sign in</Text>
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={emailAddress => setEmailAddress(emailAddress)}
      />
      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Continue</Text>
      </TouchableOpacity>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 15,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginTop: 10,
  },
});

export default SigninScreen;
