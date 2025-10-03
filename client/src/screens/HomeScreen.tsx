import { Image, Text, View, TouchableOpacity, FlatList, Alert, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'providers/AuthProvider';
import { SignOutButton } from '@components/SignOutButton';
import { useTransactions } from 'hooks/useTransactions';
import PageLoader from '@components/PageLoader';
import BalanceCard from '@components/BalanceCard';

import { styles } from '../../assets/styles/home.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactionItem from '@components/TransactionItem';
import NoTransactionFound from '@components/NoTransactionFound';
import { AppStackParamList } from '@navigation/AppNavigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { user } = useAuth();
  const { transactions, summary, isLoading, loadData, deleteTransaction } =
    useTransactions(user?.uid);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);


  const handleDelete = (id: number) => {
    Alert.alert('Delete Transaction', 'Are you sure you want to delete this transaction?' , [
      { text: 'Cancel', style: 'cancel'},
      { text: 'Delete', style: 'destructive', onPress: () => deleteTransaction(id)}
    ])
  };

  if (isLoading && !refreshing) {
    return <PageLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../../assets/img/logo.png')}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.email?.split('@')[0]}
              </Text>
            </View>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateTransaction')}>
              <Ionicons name='add' size={20} color={'#fff'}/>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        <BalanceCard summary={summary} />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}> Recent Transactions</Text>
        </View>
      </View>

      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={<NoTransactionFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

export default HomeScreen;
