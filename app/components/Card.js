import { StyleSheet, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.card}>
      {/* <Image source={require(image)} style={styles.image} /> */}

      <View style={styles.detailsContainer}>
        <AppText extrastyle={styles.title}>{title}</AppText>
        <AppText extrastyle={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
