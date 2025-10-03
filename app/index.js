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
import AccountScreen from "./screens/AccountScreen";
import Screen from "./components/Screen";

export default function HomeScreen() {
  return (
    <Screen>
      <AccountScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
