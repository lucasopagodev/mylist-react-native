import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Button() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.6}>
      <Feather name="plus-circle" size={18} color={COLORS.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blueDark,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.black700,
  },
});
