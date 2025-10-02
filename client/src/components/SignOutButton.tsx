import { Text, TouchableOpacity } from 'react-native';
import { getAuth } from '@react-native-firebase/auth';

import { COLORS } from '@constants/colors';

export const SignOutButton = () => {
  const signOut = async () => {
    await getAuth().signOut();
  }

  return (
    <TouchableOpacity onPress={signOut}>
      <Text>Sign out</Text>
    </TouchableOpacity>
  );
};
