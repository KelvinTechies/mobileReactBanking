import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInputIcon } from "react-native-paper";
import { FontAwesome6, Feather } from "@expo/vector-icons/";
const Password = () => {
  return (
    <View>
      <SafeAreaView />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: 600 }}>
          Reset Your Password
        </Text>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 1,
            }}
          >
            <Feather name="eye" />
            <TextInput
              icon={<Feather name="eye" />}
              style={{
                width: 300,

                padding: 5,
              }}
              placeholder="Old Password"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          >
            <Feather name="eye" />
            <TextInput
              icon={<Feather name="eye" />}
              style={{
                width: 300,

                padding: 5,
              }}
              placeholder="New Password"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 1,
              marginTop: 10,
            }}
          >
            <Feather name="eye" />
            <TextInput
              icon={<Feather name="eye" />}
              style={{
                width: 300,

                padding: 5,
              }}
              placeholder="Confirm New Password"
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#04F831",
              padding: 10,
              borderRadius: 20,
              width: 300,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginLeft: 20, marginTop: 30 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{ backgroundColor: "green", borderRadius: 100, padding: 5 }}
          >
            <Feather name="check" size={20} color={"#fff"} />
          </View>
          <Text style={{ fontWeight: 500 }}>
            Your Password must contain atleast one number
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{
              backgroundColor: "green",
              borderRadius: 100,
              padding: 5,
              marginTop: 10,
            }}
          >
            <Feather name="check" size={20} color={"#fff"} />
          </View>
          <Text style={{ fontWeight: 500 }}>
            Your Password must contain atleast one symbol
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({});
