import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppButton from "../components/button";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={{ alignItems: "center", position: "absolute", top: 70 }}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.loginButton}>
          <AppButton textStyle={{ textTransform: "uppercase" }}>
            Login
          </AppButton>
        </View>
        <View style={styles.registerButton}>
          <AppButton
            variant="secondary"
            textStyle={{ textTransform: "uppercase" }}
          >
            Register
          </AppButton>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
    width: "100%",
  },
  loginButton: {
    width: "100%",
    height: 60,
  },
  registerButton: {
    marginTop: 10,
    width: "100%",
    height: 60,
  },
});
