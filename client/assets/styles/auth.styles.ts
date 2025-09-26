// styles/auth.styles.js
import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 10,
    padding: 16,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  // 🔴 Error styles
  errorBox: {
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
    borderLeftColor: COLORS.expense,
    borderLeftWidth: 4,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    width: '100%',
  },
  errorInput: {
    borderColor: COLORS.expense,
  },
  errorText: {
    color: COLORS.text,
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
  },
  footerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  footerText: {
    color: COLORS.text,
    fontSize: 16,
  },
  illustration: {
    height: 310,
    resizeMode: 'contain',
    width: '100%',
  },
  input: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 1,
    color: COLORS.text,
    fontSize: 16,
    marginBottom: 16,
    padding: 15,
  },
  linkText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  verificationContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  verificationInput: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 1,
    color: COLORS.text,
    fontSize: 16,
    letterSpacing: 2,
    marginBottom: 16,
    padding: 15,
    textAlign: 'center',
    width: '100%',
  },
  verificationTitle: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
