import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from '../../assets/styles/home.styles';
import { COLORS } from '@constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NoTransactionFound = () => {
  return (
    <View style={styles.emptyState}>
      <Ionicons
        name="receipt-outline"
        size={60}
        color={COLORS.textLight}
        style={styles.emptyStateIcon}
      />
      <Text style={styles.emptyStateTitle}>No transactions yet</Text>
      <Text style={styles.emptyStateText}>
        Start tracking your finances by adding your first transaction
      </Text>

      <TouchableOpacity style={styles.emptyStateButton} onPress={() => {}}>
        <Ionicons name='add-circle' size={18} color={COLORS.white} />
        <Text style={styles.emptyStateButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoTransactionFound;
