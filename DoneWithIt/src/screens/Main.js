import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { useState } from "react";
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
import { TouchableOpacity } from "react-native-gesture-handler";
import * as API from "../constant/API";

function Main({ navigation }) {
  const [teams, setTeams] = useState([]);
  const [companyId, setCompanyId] = useState();
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState();

  var rawdata = [
    {
      id: "1",
      name: "Harman",
      url: "https://cdn2.thecatapi.com/images/14p.gif",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "2",
      name: "Wipro",
      url: "https://cdn2.thecatapi.com/images/27r.jpg",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "3",
      name: "Altimetrik Corporation",
      url: "https://cdn2.thecatapi.com/images/6rb.gif",
      accountManage: {
        firstName: "Rathina Sabapathi",
        userId: 3,
      },
    },
    {
      id: "4",
      name: "Harman",
      url: "https://cdn2.thecatapi.com/images/c58.jpg",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "5",
      name: "Wipro",
      url: "https://cdn2.thecatapi.com/images/cjd.jpg",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "6",
      name: "Altimetrik Corporation",
      url: "https://cdn2.thecatapi.com/images/de1.jpg",
      accountManage: {
        firstName: "Rathina Sabapathi",
        userId: 3,
      },
    },
    {
      id: "7",
      name: "Harman",
      url: "https://cdn2.thecatapi.com/images/dnn.jpg",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "8",
      name: "Wipro",
      url: "https://cdn2.thecatapi.com/images/MTU3ODY4MA.jpg",
      accountManage: {
        firstName: "Bala Murali",
        userId: 2,
      },
    },
    {
      id: "9",
      name: "Altimetrik Corporation",
      url: "https://cdn2.thecatapi.com/images/USpC6E-ws.jpg",
      accountManage: {
        firstName: "Rathina Sabapathi",
        userId: 3,
      },
    },
  ];

  const Item = ({ team }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => teamTapped(team)}>
        <Image
          style={styles.rowImage}
          source={{
            uri: team.url,
          }}
        ></Image>

        <View>
          <Text styles={styles.teamName}>{team.name} (Team Name)</Text>
          <Text styles={styles.teamAM}>
            {team.accountManage.firstName} (AM)
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const teamTapped = (team) => {
    navigation.navigate("TeamDetail", { team: team });
  };

  const renderItem = ({ item }) => <Item team={item} />;

  const fetchTeams = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
      .then((response) => response.json())
      .then((responseJson) => responseJson)
      .catch((e) => console.log(e));
  };

  // fetchTeams();

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
