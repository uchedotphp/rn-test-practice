import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
} from "react-native";
// import WelcomeScreen from "./screens/WelcomeScreen";
import MessagesScreen from "./screens/MessagesScreen";

export default function HomeScreen() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
