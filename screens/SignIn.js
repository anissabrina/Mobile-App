import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignIn = ({ navigation }) => {
  function navigate() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/images/iiumevenuelogotransparent.png")}
        />
      </View>

      <View style={styles.bottom}>
        <Text style={styles.heading}>Welcome</Text>

        <View style={styles.form}>
          <TextInput
            placeholder={"Email address*"}
            placeholderTextColor={"#fff"}
            style={styles.input}
          />
          <TextInput
            placeholder={"Password*"}
            secureTextEntry={true}
            placeholderTextColor={"#fff"}
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={navigate}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.guestButton} onPress={navigate}>
          <Text style={styles.guestText}>Browse as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  bottom: {
    width: "100%",
    height: "70%",
    backgroundColor: "#000",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  logo: {
    width: "65%",
    resizeMode: "contain",
  },

  heading: {
    color: "#fff",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 55,
    marginLeft: 35,
  },

  form: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },

  input: {
    width: "90%",
    height: 52,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    paddingLeft: 15,
    color: "#fff",
    marginTop: 25,
  },

  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    display: "flex",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 17,
  },

  guestText: {
    color: "gray",
    fontSize: 17,
  },

  guestButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SignIn;
