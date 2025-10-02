import auth from '@react-native-firebase/auth';
import EncryptedStorage from 'react-native-encrypted-storage';

export async function signUp(email: string, password: string) {
  const userCredential = await auth().createUserWithEmailAndPassword(email, password);
  
  // отправляем письмо
  await userCredential.user.sendEmailVerification();

  // сохраняем юзера
  await saveToken(userCredential.user);
  
  return userCredential.user;
}

export async function signIn(email: string, password: string) {
  const userCredential = await auth().signInWithEmailAndPassword(email, password);
  
  // проверяем подтверждение почты
  if (!userCredential.user.emailVerified) {
    throw new Error("Пожалуйста, подтвердите почту");
  }

  await saveToken(userCredential.user);
  return userCredential.user;
}

export async function signOut() {
  await auth().signOut();
  await EncryptedStorage.removeItem('user');
}

async function saveToken(user: any) {
  const token = await user.getIdToken();
  await EncryptedStorage.setItem(
    'user',
    JSON.stringify({ uid: user.uid, email: user.email, token, emailVerified: user.emailVerified })
  );
}