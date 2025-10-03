import { Image, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({ iconBackground, icon, title, subTitle, onPress }) {
  const handlePress = () => {
    if (onPress && typeof onPress === "function") {
      onPress();
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, { backgroundColor: iconBackground }]}>
        {icon && <MaterialCommunityIcons name={icon} size={24} color={colors.white} />}
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <AppText extrastyle={styles.title}>{title}</AppText>
          {subTitle && <AppText extrastyle={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
