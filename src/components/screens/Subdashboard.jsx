import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import Division from "./common/Division";
const Subdashboard = () => {
  return (
    <>
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: "95%",
          borderRadius: 10,
          padding: 10,
        }}
      >
        <View style={{alignItems:"center"}}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1C7C7",
              borderRadius: 100,
              height: 40,
              width: 40,
              marginBottom: 5,
            }}
          >
            <MaterialIcons name="account-box" size={24} color="#FF5757" />
          </View>
          <Text style={styles.text}>To Ibank</Text>
        </View>

        <View style={{alignItems:"center"}}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1C7C7",
              borderRadius: 100,
              height: 40,
              width: 40,
              marginBottom: 5,
            }}
          >
            <MaterialIcons name="account-balance" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Other Banks</Text>
        </View>
        <View style={{alignItems:"center"}}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F1C7C7",
              borderRadius: 100,
              height: 40,
              width: 40,
              marginBottom: 5,
            }}
          >
            <AntDesign name="arrowsalt" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Withdrawal</Text>
        </View>
      </View>
    </View>
      <Division/>

    
    </>
  );
};

export default Subdashboard;

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
  },
});
