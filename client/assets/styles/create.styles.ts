// styles/create.styles.js
import { StyleSheet } from "react-native";
import { COLORS } from "@constants/colors";

export const styles = StyleSheet.create({
  amountContainer: {
    alignItems: "center",
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    marginBottom: 20,
    paddingBottom: 16,
  },
  amountInput: {
    color: COLORS.text,
    flex: 1,
    fontSize: 36,
    fontWeight: "bold",
  },
  backButton: {
    padding: 5,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    elevation: 3,
    margin: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryButton: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  categoryButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryButtonText: {
    color: COLORS.text,
    fontSize: 14,
  },
  categoryButtonTextActive: {
    color: COLORS.white,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  categoryIcon: {
    marginRight: 6,
  },
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  currencySymbol: {
    color: COLORS.text,
    fontSize: 32,
    fontWeight: "bold",
    marginRight: 8,
  },
  header: {
    alignItems: "center",
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    color: COLORS.text,
    flex: 1,
    fontSize: 16,
    padding: 12,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 20,
    padding: 4,
  },
  inputIcon: {
    marginHorizontal: 12,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  saveButton: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  saveButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  saveButtonDisabled: {
    opacity: 0.5,
  },
  sectionTitle: {
    alignItems: "center",
    color: COLORS.text,
    flexDirection: "row",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    marginTop: 10,
  },
  typeButton: {
    alignItems: "center",
    borderColor: COLORS.border,
    borderRadius: 25,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
  },
  typeButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  typeButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "500",
  },
  typeButtonTextActive: {
    color: COLORS.white,
  },
  typeIcon: {
    marginRight: 8,
  },
  typeSelector: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
});