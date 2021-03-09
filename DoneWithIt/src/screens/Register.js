import React, { useState, createRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
} from "react-native";

function Register({ navigation }) {
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
    let dataToSend = { email: userEmail, password: userPassword };
    console.log(dataToSend);
  };

  return (
    <View style={styles.background}>
      <View style={styles.bgContainer}>
        <Text style={styles.loginText}>Create New User</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Full Name"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="default"
            returnKeyType="next"
            onChangeText={(username) => setUserEmail(username)}
          />
        </View>

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

export default Register;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e1e1e1",
  },
  bgContainer: {
    flex: 0.2,
    backgroundColor: "#4ecdc4",
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
    color: "#4ecdc4",
  },
  submittButton: {
    width: "50%",
    height: 50,
    marginTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#4ecdc4",
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
    borderColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
