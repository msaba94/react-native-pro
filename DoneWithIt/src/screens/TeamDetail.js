import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

function TeamDetail({ route, navigation }) {
  const { team } = route.params;
  return (
    <View style={styles.container}>
      <Text>{team.name}</Text>
    </View>
  );
}

export default TeamDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    justifyContent: "center",
  },
});
