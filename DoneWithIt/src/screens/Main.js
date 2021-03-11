import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import * as API from "../constant/API";
import * as Color from "../constant/Color";

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

  const teamTapped = (team) => {
    navigation.navigate("TeamDetail", {
      team: team,
    });
  };

  const renderItem = ({ item }) => <Item team={item} />;

  const fetchTeams = () => {
    AsyncStorage.getItem("userId").then((value) => {
      setUserId(value);
      console.log("UserId: ", userId);
    });

    AsyncStorage.getItem("token").then((value) => {
      setToken(value);
      console.log("Token: " + token);
    });

    AsyncStorage.getItem("companyId").then((value) => {
      setCompanyId(value);
      console.log("Company Id: " + companyId);
    });

    let companyIdJSON = { companyId: setCompanyId };

    fetch(API.BASE_URL + API.GET_TEAMS, {
      method: "POST",
      body: JSON.stringify(companyIdJSON),
      headers: {
        "Content-Type": "application/json",
        Authorization: setToken,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setTeams(responseJson.teams);
        console.log(setTeams);
      })
      .catch((e) => console.log(e));
  };

  // fetchTeams();

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
  teamName: {
    fontSize: 20,
  },
  teamAM: {
    fontStyle: 18,
  },
  rowImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 16,
  },
  item: {
    paddingBottom: 8,
    paddingStart: 8,
    paddingEnd: 8,
    paddingTop: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: StyleSheet.hairlineWidth,
    flexDirection: "row",
  },
});
