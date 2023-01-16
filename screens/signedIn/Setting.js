import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Setting = () => {
  return (
    <View style={styles.main}>
      <Text>Setting</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyConstent: "center",
  },
});

export default Setting;
