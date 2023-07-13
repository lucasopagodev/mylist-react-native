import { Feather } from "@expo/vextor-icons";
import { useState } from "react";
import { StyleSheetm, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  ReactButton,
} from "react-native-gesture-handler";
import { COLORS } from "../../theme/colors";

export default function Item() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <GestureHandlerRootView>
      <Swipeable>
        <ReactButton>
          <View>
            <Feather name="plus-circle" size={18} color={COLORS.white} />
          </View>
          <Text style={[styles.title, isSelected && styles.checked]}>Item</Text>
        </ReactButton>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.black500,
    padding: 12,
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray500,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
  },
  checked: {
    textDecorationLine: "line-through",
    color: COLORS.gray300,
  },
  remove: {
    backgroundColor: COLORS.red,
    height: "96%",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 8,
    marginVertical: 1,
    right: -40,
    paddingLeft: 32,
    paddingRight: 17,
  },
});
