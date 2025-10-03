import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItemDelete({ onPress }) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={onPress}
      style={styles.rightActions}
    >
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={24}
        color={colors.white}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  rightActions: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
