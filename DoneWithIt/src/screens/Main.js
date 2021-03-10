import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from "react-native";
import * as API from "../constant/API";

function Main({ navigation }) {
  var rawdata = [];

  const Item = ({ team }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.rowImage}
          source={require("../assets/user-profile-placeholder.png")}
        ></Image>

        <View styles={styles.leftRow}>
          <Text styles={styles.teamName}>{team.name} (Team Name)</Text>
          <Text styles={styles.teamAM}>
            {team.accountManager.firstName} {team.accountManager.lastName} (AM)
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={rawdata}
        renderItem={renderItem}
        keyExtractor={(item) => item.teamId}
      />
    </SafeAreaView>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 16,
  },
  leftRow: {},
  teamName: {
    fontWeight: "bold",
    color: "red",
  },
  teamAM: {
    fontSize: 20,
    color: "red",
  },
  teamTL: {
    fontSize: 20,
    color: "red",
  },
  item: {
    top: StatusBar.currentHeight + 8,
    paddingBottom: 8,
    paddingStart: 8,
    paddingEnd: 8,
    paddingTop: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: StyleSheet.hairlineWidth,
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    color: "#000",
  },
});
