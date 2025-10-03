import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from 'providers/AuthProvider'
import { SignOutButton } from '@components/SignOutButton';
import { useTransactions } from 'hooks/useTransactions';

const HomeScreen = () => {
  const { user } = useAuth();
  const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(user?.uid);

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log('userId', user?.uid);

  console.log("transactions", transactions);
  console.log("summary", summary);

  return (
    <View>
      <Text>Hello {user?.email}</Text>
      <SignOutButton />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})