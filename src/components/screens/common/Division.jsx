import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  MaterialIcons,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
  Entypo,
  AntDesign
} from "@expo/vector-icons";
const Division = () => {
  return (
    <>
   <View style={{alignItems:"center"}}>
   <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: "95%",
          padding: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
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
            <MaterialIcons name="call" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Airtime</Text>
        </View>
        <View style={{ alignItems: "center" }}>
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
            <MaterialIcons name="network-check" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Data</Text>
        </View>
        <View style={{ alignItems: "center" }}>
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
            <FontAwesome name="soccer-ball-o" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Betting</Text>
        </View>
        <View style={{ alignItems: "center" }}>
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
            <FontAwesome name="tv" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Subscription</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
          padding: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
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
            <FontAwesome6 name="lightbulb" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Electricity</Text>
        </View>
        <View style={{ alignItems: "center" }}>
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
            <FontAwesome6 name="sack-dollar" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Refer & Earn</Text>
        </View>
        <View style={{ alignItems: "center" }}>
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
            <MaterialIcons name="flight" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Flight</Text>
        </View>
        <View style={{ alignItems: "center" }}>
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
            <MaterialCommunityIcons name="finance" size={24} color="#FF5757" />
          </View>

          <Text style={styles.text}>Invest</Text>
        </View>
      </View>
    
      <View style={{flexDirection:"row", justifyContent:"space-between", width:"96%", padding:5, borderRadius:10, backgroundColor:"#fff", marginTop:10}}>
      <View style={styles.divisionContainer}>
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
          <Entypo name="megaphone" size={24} color="#FF5757" />
        </View>
        <View tyle={styles.txtContainer}>
          <Text style={{color:"#134569", fontSize:13, fontWeight:"600"}}>Refer & Earn</Text>
          <Text style={{color:"#134569",  fontSize:10, fontWeight:"600"}}>Earn $500 Cashback with referral</Text>
        </View>
       
      </View>
      <View>
      <Pressable>
        <Text>
      <AntDesign name="close" size={24} color="#ccc" />

        </Text>
      </Pressable>
       </View>
      </View>
   </View>
    </>
  );
};

export default Division;

const styles = StyleSheet.create({
  divisionContainer:{
    flexDirection:"row",
    gap:10,
    alignItems:"center",
    padding:5,
  },
  txtContainer:{
    flexDirection:"column",
    gap:10,
    alignItems:"center",
    padding:5,
    fontSize:10

  }
});
