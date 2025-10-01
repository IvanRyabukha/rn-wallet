import React, { useState } from 'react';
import { Link } from '@react-navigation/native';
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

type SignupScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

interface SignupScreenProps {
  navigation: SignupScreenNavigationProp;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const userCredential = await getAuth().createUserWithEmailAndPassword(emailAddress, password);
      await userCredential.user.sendEmailVerification();
      Alert.alert('Cheack your email for verifie account!');
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View>
      <>
        <Text>Sign up</Text>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          onChangeText={email => setEmailAddress(email)}
        />
        <TextInput
          value={password}
          placeholder="Enter password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
        <TouchableOpacity onPress={handleSignup}>
          <Text>Continue</Text>
        </TouchableOpacity>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
          <Text>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Signin')}>
            <Text>Sign in</Text>
          </Pressable>
        </View>
      </>
    </View>
  );
};

export default SignupScreen;
