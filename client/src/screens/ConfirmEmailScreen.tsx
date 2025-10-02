import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { getAuth } from '@react-native-firebase/auth';
import { useAuth } from 'providers/AuthProvider';

import { COLORS } from '@constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../../assets/styles/auth.styles';
import { isFirebaseAuthError } from '@lib/utils';

const ConfirmEmailScreen = () => {
  const { refreshUser } = useAuth();
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');

  const checkVerification = async () => {
    try {
      setChecking(true);
      await getAuth().currentUser?.reload();
      await getAuth().currentUser?.getIdToken(true);
      await refreshUser();

      if (getAuth().currentUser?.emailVerified) {
        Alert.alert('Email verified!');
      } else {
        setError('Email not verified!');
      }
    } catch (error) {
      if (isFirebaseAuthError(error)) {
        setError(error.message);
      } else {
        setError('Unknown error, please try againg');
      }
    } finally {
      setChecking(false);
    }
  };

  const resend = async () => {
    await getAuth().currentUser?.sendEmailVerification();
    Alert.alert('The link has been sent again.');
  };

  return (
    <View style={styles.verificationContainer}>
      <Text style={styles.verificationTitle}>Verify your email</Text>
      {error ? (
        <View style={styles.errorBox}>
          <Ionicons name="alert-circle" size={20} color={COLORS.expense} />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={() => setError('')}>
            <Ionicons name="close" size={20} color={COLORS.textLight} />
          </TouchableOpacity>
        </View>
      ) : null}

      <TouchableOpacity onPress={checkVerification} style={styles.button}>
        {checking ? (
          <ActivityIndicator size={20} color={COLORS.white}/>
        ) : (
          <Text style={styles.buttonText}>{'Verify'}</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={resend} style={styles.button}>
        <Text style={styles.buttonText}>Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmEmailScreen;
