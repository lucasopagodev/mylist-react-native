import { Image, StyleSheet, View } from "react-native";
import Logo from "../../assets/logo.png";
import { COLORS } from "../../theme/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 175,
    backgroundColor: COLORS.black500,
    alignItems: "center",
    justifyContent: "center",
  },
});
