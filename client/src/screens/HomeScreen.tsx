import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from 'providers/AuthProvider'
import { SignOutButton } from '@components/SignOutButton';

const HomeScreen = () => {
  const { user } = useAuth();
  return (
    <View>
      <Text>Hello {user?.email}</Text>
      <SignOutButton />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})