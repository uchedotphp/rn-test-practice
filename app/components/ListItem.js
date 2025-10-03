import { Image, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";
import ListItemDelete from "./ListItemDelete";

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
}) {
  const handlePress = () => {
    if (onPress && typeof onPress === "function") {
      onPress();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View>
          <AppText extrastyle={styles.title}>{title}</AppText>
          <AppText extrastyle={styles.subTitle}>{subTitle}</AppText>
        </View>
        <ListItemDelete onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
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
