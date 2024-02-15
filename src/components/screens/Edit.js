import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons/";
import { TextInput } from "react-native-paper";

const Edit = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <SafeAreaView />
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 700,
              position: "relative",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 300 }}
              resizeMode="contain"
              source={require("../../../assets/images/wepik-export-20240128004745sExC.png")}
            />
          </View>
          <View
            style={{
              backgroundColor: "#FF5757",
              padding: 10,
              borderRadius: 200,
              bottom: 40,
              right: -40,
            }}
          >
            <Feather name="camera" size={10} color={"#fff"} />
          </View>

          <View>
            <TextInput
              style={{
                width: 300,
                backgroundColor: "transparent",

                height: 40,
              }}
              label={"Full name"}
              mode="flat"
              placeholder="name"
              keyboardType="twitter"
            />
            <TextInput
              style={{
                width: 300,
                backgroundColor: "transparent",
                marginTop: 40,
                height: 40,
              }}
              label={"Email"}
              mode="flat"
              keyboardType="email-address"
            />
            <TextInput
              style={{
                width: 300,
                backgroundColor: "transparent",

                marginTop: 40,
                height: 40,
              }}
              label={"Phone Number"}
              mode="flat"
              keyboardType="number-pad"
            />
            <TextInput
              style={{
                width: 300,
                marginTop: 40,
                backgroundColor: "transparent",

                height: 40,
              }}
              label={"Account Number"}
              mode="flat"
              disabled
            />
            <TextInput
              style={{
                width: 300,
                marginTop: 40,
                backgroundColor: "transparent",

                height: 40,
              }}
              label={"Date of Birth"}
              mode="flat"
              keyboardType="ascii-capable"
            />

            <View
              style={{
                marginTop: 100,
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: 5,
                  borderRadius: 20,
                  width: 150,
                  alignItems: "center",
                }}
                onPress={goBack}
              >
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#04F831",
                  padding: 5,
                  borderRadius: 20,
                  width: 150,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({});
