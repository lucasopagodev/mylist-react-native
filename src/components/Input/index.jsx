import { TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Input() {
  return (
    <TextInput
      placeholder="Adicione algo a sua lista"
      placeholderTextColor={COLORS.gray300}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 16,
    height: 54,
    backgroundColor: COLORS.gray700,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.black700,
    fontSize: 16,
    color: COLORS.white,
  },
});
