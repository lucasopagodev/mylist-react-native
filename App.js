import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./src/components/Header";
import { COLORS } from "./src/theme/colors";
import Input from "./src/components/Input";
import Button from "./src/components/Button";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: COLORS.black500 }} />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <>
              <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.black500}
              />

              <Header />

              <View style={styles.add}>
                <Input />
                <Button />
              </View>
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black900,
  },
  add: {
    marginTop: -27,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 24,
  },
});
