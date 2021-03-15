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

// constants
import { theme } from "../constant";

// theme
const { COLORS, FONTS, SIZES } = theme;

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
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
      .then((response) => response.json())
      .then((responseJson) => responseJson)
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
          <Text
            styles={{
              ...FONTS.h3,
              color: COLORS.gray,
            }}
          >
            {team.name} (Team Name)
          </Text>
          <Text
            styles={{
              ...FONTS.h4,
              color: COLORS.black,
            }}
          >
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
    backgroundColor: COLORS.gray,
  },
  rowImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 16,
  },
  item: {
    paddingBottom: SIZES.base,
    paddingStart: SIZES.base,
    paddingEnd: SIZES.base,
    paddingTop: SIZES.base,
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin: StyleSheet.hairlineWidth,
    flexDirection: "row",
  },
});
