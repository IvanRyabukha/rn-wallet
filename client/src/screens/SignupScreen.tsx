import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthStackParamList } from '@navigation/AuthNavigation';
import { getAuth } from '@react-native-firebase/auth';

import { COLORS } from '@constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/styles/auth.styles';
import { isFirebaseAuthError } from '@lib/utils';

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
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const userCredential = await getAuth().createUserWithEmailAndPassword(
        emailAddress,
        password,
      );
      await userCredential.user.sendEmailVerification();
      Alert.alert('Cheack your email for verifie account!');

      navigation.reset({
        index: 1,
        routes: [{ name: 'Signin' }, { name: 'ConfirmEmail' }],
      });
    } catch (error) {
      if (isFirebaseAuthError(error)) {
        setError(error.message);
      } else {
        setError('Unknown error, please try againg');
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={30}
    >
        <View style={styles.container}>
          <Image
            source={require('../../assets/img/revenue-i2.png')}
            style={styles.illustration}
          />
          <Text style={styles.title}>Create Account</Text>

          {error ? (
            <View style={styles.errorBox}>
              <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity onPress={() => setError('')}>
                <Ionicons name="close" size={20} color={COLORS.textLight} />
              </TouchableOpacity>
            </View>
          ) : null}

          <TextInput
            style={[styles.input, error && styles.errorInput]}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="Enter email"
            placeholderTextColor={'#9a8478'}
            onChangeText={email => setEmailAddress(email)}
          />

          <TextInput
            style={[styles.input, error && styles.errorInput]}
            value={password}
            placeholder="Enter password"
            placeholderTextColor={'#9a8478'}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Pressable onPress={() => navigation.goBack()}>
              <Text style={styles.linkText}>Sign in</Text>
            </Pressable>
          </View>
        </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
