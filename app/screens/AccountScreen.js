import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../components/Profile";
import colors from "../config/colors";
import SmallListItem from "../components/SmallListItem";
import ListItemSeparator from "../components/ListItemSeparator";

export default function AccountScreen() {
  const data = [
    {
      title: "My Listings",
      icon: "format-list-bulleted",
      iconBackground: colors.primary,
    },
    {
      title: "My Messages",
      icon: "email",
      iconBackground: colors.secondary,
    },
    {
      title: "Logout",
      icon: "logout",
      iconBackground: colors.yellow,
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        <Profile />
      </View>

      <FlatList style={{ backgroundColor: colors.white, marginTop: 40 }}
        data={data}
        renderItem={({ item }) => (
          <SmallListItem
            title={item.title}
            icon={item.icon}
            iconBackground={item.iconBackground}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});
