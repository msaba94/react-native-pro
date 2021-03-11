import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import * as Color from "../constant/Color";

function Home({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContent}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text style={styles.welcomeText}>Requirement Tracking System</Text>
      </View>
      <TouchableHighlight
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.textView}>Login to Application</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.registerButton}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.textView}>Register to Application</Text>
      </TouchableHighlight>
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContent: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  welcomeText: {
    color: Color.PrimaryColor,
    fontSize: 25,
    top: 20,
    fontWeight: "bold",
  },
  loginButton: {
    width: "100%",
    height: 60,
    backgroundColor: Color.PrimaryColor,
    justifyContent: "center",
    alignContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 60,
    backgroundColor: Color.SecondaryColor,
    justifyContent: "center",
    alignContent: "center",
  },
  textView: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
