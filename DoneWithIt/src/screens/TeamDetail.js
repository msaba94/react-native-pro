import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TeamDetail(props) {
  const team = props.team;

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
