import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 16,
      },
    }),
  },
});
