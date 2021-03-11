import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("userId").then((value) =>
        navigation.replace(value === null ? "Auth" : "Main")
      );
    }, 5000);
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <Image
        source={require("../assets/logo-red.png")}
        style={{ width: "35%", resizeMode: "contain", margin: 30 }}
      />
      <ActivityIndicator
        animating={animating}
        color="#fc5c65"
        size="large"
        style={styles.activityIndicator}
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 100,
    top: 10,
  },
});
