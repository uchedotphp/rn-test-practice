import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import colors from "../config/colors";

export default function Screen({ children }) {
  // return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.lightGray,
  },
});
