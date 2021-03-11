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
  var rawdata = [
    {
      id: "1",
      name: "Harman",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "2",
      name: "Wipro",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "3",
      name: "Altimetrik Corporation",
      accountManage: {
        firstName: "Rathina Sabapathi",
        userId: 3,
      },
    },
    {
      id: "4",
      name: "Harman",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "5",
      name: "Wipro",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "6",
      name: "Altimetrik Corporation",
      accountManage: {
        firstName: "Rathina Sabapathi",
        userId: 3,
      },
    },
    {
      id: "7",
      name: "Harman",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "8",
      name: "Wipro",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "9",
      name: "Altimetrik Corporation",
      accountManage: {
        firstName: "Rathina Sabapathi",
        userId: 3,
      },
    },
  ];

  const Item = ({ team }) => {
    return (
      <View style={styles.item}>
        <Image
          style={styles.rowImage}
          source={require("../assets/user-profile-placeholder.png")}
        ></Image>

        <View>
          <Text styles={styles.teamName}>{team.name} (Team Name)</Text>
          <Text styles={styles.teamAM}>
            {team.accountManage.firstName} (AM)
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => <Item team={item} />;

  return (
    <View styles={styles.container}>
      <FlatList
        data={rawdata}
        renderItem={renderItem}
        keyExtractor={(team) => team.id}
      />
    </View>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    flexDirection: "row",
  },
  teamAM: {
    fontSize: 20,
    color: "red",
    flexDirection: "row",
  },
  teamTL: {
    fontSize: 20,
    color: "red",
    flexDirection: "row",
  },
  item: {
    paddingBottom: 8,
    paddingStart: 8,
    paddingEnd: 8,
    paddingTop: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: StyleSheet.hairlineWidth,
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: 32,
    color: "#000",
  },
});
