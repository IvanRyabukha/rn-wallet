import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, FirebaseAuthTypes } from '@react-native-firebase/auth';

type AuthContextType = {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = getAuth().onIdTokenChanged(firebaseUser => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const refreshUser = async () => {
    try {
      // reload уже делает обновление данных пользователя на сервере
      await getAuth().currentUser?.reload();
      // принудительно обновим токен — это вызовет onIdTokenChanged
      await getAuth().currentUser?.getIdToken(true);
      // Дополнительно обновим локально (на случай, если onIdTokenChanged не спровоцировал ререндер сразу)
      setUser(getAuth().currentUser);
    } catch (err) {
      console.warn('refreshUser error', err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
