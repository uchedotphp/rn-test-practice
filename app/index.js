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
    // <View style={styles.container}>
    //   <View
    //     style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
    //   >
    //     <Image
    //       source={require("./assets/background.jpg")}
    //       style={{ width: "100%", height: "100%" }}
    //     />
    //   </View>

    //   <View
    //     style={{
    //       flex: 1,
    //       alignItems: "center",
    //       paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //     }}
    //   >
    //     <Image
    //       source={require("./assets/logo-red.png")}
    //       style={{ width: 100, height: 100, marginTop: 50 }}
    //     />
    //     <Text>Sell What You Don't Need</Text>
    //   </View>

    //   <View
    //     style={{ width: "100%", height: 100, backgroundColor: "dodgerblue" }}
    //   />
    //   <View style={{ width: "100%", height: 100, backgroundColor: "green" }} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
