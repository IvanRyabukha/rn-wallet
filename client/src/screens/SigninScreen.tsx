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
  Image,
} from 'react-native';
import { AuthStackParamList } from '@navigation/AuthNavigation';
import { getAuth } from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { COLORS } from '@constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/styles/auth.styles';
import { isFirebaseAuthError } from '@lib/utils';

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
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await getAuth().signInWithEmailAndPassword(
        emailAddress,
        password,
      );
      if (!userCredential.user?.emailVerified) {
        Alert.alert('Verifi your email!');

        navigation.reset({
          index: 1,
          routes: [{ name: 'Signin' }, { name: 'ConfirmEmail' }],
        });

        return;
      }
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
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/img/revenue-i4.png')}
          style={styles.illustration}
        />
        <Text style={styles.title}>Welcome Back</Text>

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
          placeholderTextColor={'#9a8478'}
          placeholder="Enter email"
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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don&apos;t have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.linkText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SigninScreen;
