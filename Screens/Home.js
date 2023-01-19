import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, } from "react-native";


const Venue = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <TouchableOpacity onPress={() => navigation.navigate("VenueDetails")}>
          <View style={styles.cardViewTop}>
            <View style={styles.cardTitle}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Conference Room
              </Text>
            </View>
          </View>

          <View style={styles.cardViewBottom}>
            <Image
              source={require("../assets/venue/Conference-Room.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("VenueDetails")}>
          <View style={styles.cardViewTop}>
            <View style={styles.cardTitle}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Lecture Theatre
              </Text>
            </View>
          </View>

          <View style={styles.cardViewBottom}>
            <Image
              source={require("../assets/venue/Lecture-Theatre.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("VenueDetails")}>
          <View style={styles.cardViewTop}>
            <View style={styles.cardTitle}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Main Auditorium
              </Text>
            </View>
          </View>

          <View style={styles.cardViewBottom}>
            <Image
              source={require("../assets/venue/Lecture-Theatre.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const [feed, setFeed] = useState([]);

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.heading}>Venues</Text>
        {/* <View style={styles.searchBar}>
          <TextInput
            value={searchInput}
            onChangeText={(val) => setSearchInput(val)}
            placeholder={"Search for venue"}
            placeholderTextColor={"#000"}
            style={styles.inputText}
          />
        </View> */}
      </View>

      <ScrollView>
        <Venue />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 40,
    marginTop: 60,
    marginLeft: 25,
    fontWeight: "bold",
    marginBottom: 15,
  },

  searchBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },

  inputText: {
    height: 39,
    width: "90%",
    backgroundColor: "#EBEBEB",
    borderRadius: 20,
    paddingLeft: 15,
    marginTop: 10,
  },

  container: {
    flex: 1,
    //width: "100%",
  },

  cardView: {
    width: "100%",
    // alignItems: "center",
    padding: 15,
    marginTop: -2,
  },

  cardViewTop: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#000",
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  cardTitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  cardViewBottom: {
    display: "flex",
    alignItems: "center",
    //marginTop: 20,
  },

  image: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});