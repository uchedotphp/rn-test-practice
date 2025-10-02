import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

export default function ListItem({ image, title, subTitle, onPress }) {
  const handlePress = () => {
    if (onPress && typeof onPress === "function") {
      onPress();
    }
  };

  return (
    <TouchableHighlight underlayColor={colors.light} onPress={handlePress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText extrastyle={styles.title}>{title}</AppText>
          <AppText extrastyle={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
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
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
