import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText extrastyle={styles.title}>Red jacket for sale</AppText>
        <AppText extrastyle={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/uche.jpeg")}
            title="Uchechukwu Nwulu"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
  userContainer: {
    marginVertical: 40,
  },
});
