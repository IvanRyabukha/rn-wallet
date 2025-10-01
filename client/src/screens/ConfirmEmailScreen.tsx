import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { getAuth } from '@react-native-firebase/auth';
import { useAuth } from 'providers/AuthProvider';

const ConfirmEmailScreen = () => {
  const [checking, setChecking] = useState(false);
  const { refreshUser } = useAuth();

  const checkVerification = async () => {
    try {
      setChecking(true);
      await getAuth().currentUser?.reload();
      await getAuth().currentUser?.getIdToken(true);
      await refreshUser();



      if (getAuth().currentUser?.emailVerified) {
        Alert.alert('Email verified!');
      } else {
        Alert.alert('Email not verified!');
      }
    } catch (error) {
      Alert.alert(err);
    } finally {
      setChecking(false);
    }
  };

  const resend = async () => {
    await getAuth().currentUser?.sendEmailVerification();
    Alert.alert('The link has been sent again.');
  };

  return (
    <View>
      <Text>Verify your email</Text>
      <TouchableOpacity onPress={checkVerification}>
        <Text>{checking ? 'Сhecking...' : 'Verify'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resend}>
        <Text>Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({});
