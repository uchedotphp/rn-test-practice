import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ extrastyle, children }) {
  return <Text style={[baseStyles.text, extrastyle]}>{children}</Text>;
}

const baseStyles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
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
