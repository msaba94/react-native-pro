import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Main(props) {
  return (
    <View styles={styles.background}>
      <Text>Main Activity Screen</Text>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
  },
});
