import { Alert, Text, TouchableOpacity } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';

import { styles } from '../../assets/styles/home.styles';
import { COLORS } from '@constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SignOutButton = () => {
  const signOut = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => await getAuth().signOut(),
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  );
};
