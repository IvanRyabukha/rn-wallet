// react custom hook file

import { API_URL } from '@constants/api';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

// use deploy link to setup app in real devices
// http://localhost:5001/api
// const API_URL = 'http://10.0.2.2:5001/api';

// fix userId undefined
export const useTransactions = (userId: string | undefined) => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // useCallback ise used for performance reasons, it will memoize the function
  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.log('Error fetching transaction:', error);
    }
  }, [userId]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.log('Error fetching summary:', error);
    }
  }, [userId]);

  const loadData = useCallback(async () => {
    if (!userId) {
      return;
    }

    setIsLoading(true);
    try {
      // can be run in parallel
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (error) {
      console.log('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetchSummary, userId]);

  const deleteTransaction = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete transaction");
      }
      
      loadData();
      Alert.alert("Success", "Transaction deleted successfully!");
    } catch (error) {
      console.log('Error deleting transaction:', error);
      Alert.alert("Error", error.message);
    }
  };

  return {
    transactions,
    summary,
    isLoading,
    loadData,
    deleteTransaction,
  };
};
