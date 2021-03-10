import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

function Main({ navigation }) {
  return (
    <View style={styles.bgContent}>
      <Text style={styles.mainContent}>Main Activity Screen</Text>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  bgContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    textAlign: "center",
    color: "red",
    fontSize: 20,
  },
});
