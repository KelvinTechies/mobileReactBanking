import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { button1 } from "./common/button";

const Welcomes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.patternBg}
        source={require("../../../assets/images/2.png")}
      />
      <View style={styles.container1}>
        {/* <Text style={styles.head}>Hi</Text> */}
        <Text style={button1} onPress={() => navigation.navigate("login")}>
          Login
        </Text>
        <Text style={button1} onPress={() => navigation.navigate("signup")}>
          Sign up
        </Text>
      </View>
    </View>
  );
};

export default Welcomes;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  patternBg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  head: {
    fontSize: 30,
    color: "#fff",
  },
  container1: {
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
