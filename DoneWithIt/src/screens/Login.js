import AsyncStorage from "@react-native-community/async-storage";
import React, { useState, createRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";
import * as API from "../constant/API";

function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext("");
    if (!userEmail) {
      alert("Please fill User Email");
      return;
    }
    if (!userPassword) {
      alert("Please fill Password");
      return;
    }
    setLoading(true);
    let userRequest = { email: userEmail, password: userPassword };
    fetch(API.BASE_URL + API.USER_LOGIN, {
      method: "POST",
      body: JSON.stringify(userRequest),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success === true) {
          setAsynStorageData(responseJson);
          navigation.replace("Main");
        } else {
          console.log(responseJson.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const setAsynStorageData = (userJSON) => {
    AsyncStorage.setItem("token", userJSON.token);
    AsyncStorage.setItem("companyId", userJSON.user.companyId);
    AsyncStorage.setItem("email", userJSON.user.email);
    AsyncStorage.setItem("firstName", userJSON.user.firstName);
    AsyncStorage.setItem("lastName", userJSON.user.lastName);
    AsyncStorage.setItem("phoneNumber", userJSON.user.phoneNumber);
    AsyncStorage.setItem("role", userJSON.user.role);
    AsyncStorage.setItem("userId", "" + userJSON.user.userId);
  };

  return (
    <View style={styles.background}>
      <View style={styles.bgContainer}>
        <Text style={styles.loginText}>Login To Application</Text>
      </View>
      <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />

        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="User Email"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={(username) => setUserEmail(username)}
          />
        </View>

        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="visible-password"
            returnKeyType="next"
            onChangeText={(userPassword) => setUserPassword(userPassword)}
          />
        </View>

        <TouchableHighlight
          style={styles.submittButton}
          onPress={handleSubmitPress}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e1e1e1",
  },
  bgContainer: {
    flex: 0.2,
    backgroundColor: "#fc5c65",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#e1e1e1",
    alignItems: "center",
    top: 60,
  },
  loginText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    top: 10,
    textAlign: "center",
  },
  sectionStyle: {
    flexDirection: "row",
    height: 50,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    color: "#fc5c65",
  },
  submittButton: {
    width: "50%",
    height: 50,
    marginTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
