import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
} from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function HomeScreen() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
