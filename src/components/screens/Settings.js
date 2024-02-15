import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Subdashboard from "./Subdashboard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons/";
const Settings = ({ route, navigation }) => {
  const { userInfo } = route.params;
  return (
    <>
      <View style={{ backgroundColor: "#F7F7F7" }}>
        <SafeAreaView />

        <ScrollView>
          <View>
            <View style={styles.first_cont}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 30,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "#FF5757",
                    width: 60,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 60,
                    borderRadius: 300,
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50, borderRadius: 300 }}
                    source={require("../../../assets/images/wepik-export-20240128004745sExC.png")}
                  />
                </View>

                <View>
                  <Text style={{ fontWeight: 500, fontSize: 16 }}>
                    {userInfo.firstname}
                  </Text>
                </View>
              </View>

              <Feather name="chevron-right" size={30} />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 30,
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 30,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#180404",
                    padding: 10,
                    width: 50,
                    height: 50,
                    borderRadius: 300,
                  }}
                >
                  <Feather name="moon" size={30} color={"#fff"} />
                </View>
                <Text style={{ fontWeight: 500, fontSize: 16 }}>Dark Mode</Text>
              </View>

              <View>
                <View
                  style={{
                    backgroundColor: "#ccc",
                    width: 30,
                    height: 20,
                    borderRadius: 50,
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#FF7A7A",
                      width: 20,
                      height: 20,
                      borderRadius: 400,
                      position: "absolute",
                    }}
                  ></View>
                </View>
              </View>
            </View>

            <View style={styles.cont}>
              <Text
                style={{
                  fontWeight: 800,
                  fontSize: 25,
                  color: "#ccc",
                  marginLeft: 10,
                }}
              >
                Profile
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 30,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "gold",
                      padding: 10,
                      width: 50,
                      height: 50,
                      borderRadius: 300,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Feather name="users" color={"#fff"} size={25} />
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Edit Profile")}
                    >
                      <Text style={{ fontWeight: 500, fontSize: 16 }}>
                        Edit Profile
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Feather name="chevron-right" size={25} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Change Password")}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 30,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "dodgerblue",
                        padding: 10,
                        width: 50,
                        height: 50,
                        borderRadius: 300,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Feather name="key" color={"#fff"} size={25} />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        Change Password
                      </Text>
                    </View>
                  </View>
                  <Feather name="chevron-right" size={25} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.cont}>
              <Text
                style={{
                  fontWeight: 800,
                  fontSize: 25,
                  color: "#ccc",
                  marginLeft: 10,
                }}
              >
                Notifications
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 30,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "green",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      width: 50,
                      height: 50,
                      borderRadius: 300,
                    }}
                  >
                    <Feather name="bell" color={"#fff"} size={25} />
                  </View>
                  <View>
                    <Text style={{ fontWeight: 500, fontSize: 16 }}>
                      Notifications
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#ccc",
                    width: 30,
                    height: 20,
                    borderRadius: 50,
                    position: "relative",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#FF7A7A",
                      width: 20,
                      height: 20,
                      borderRadius: 400,
                      position: "absolute",
                      right: 0,
                    }}
                  ></View>
                </View>
              </View>
            </View>
            <View style={styles.cont}>
              <Text
                style={{
                  fontWeight: 800,
                  fontSize: 25,
                  color: "#ccc",
                  marginLeft: 10,
                }}
              >
                Regional
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 30,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rebeccapurple",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      width: 50,
                      height: 50,
                      borderRadius: 300,
                    }}
                  >
                    <FontAwesome name="language" color={"#fff"} size={25} />
                  </View>
                  <View>
                    <Text style={{ fontWeight: 500, fontSize: 16 }}>
                      Language
                    </Text>
                  </View>
                </View>
                <View>
                  <Feather name="chevron-right" size={30} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 30,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "red",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      width: 50,
                      height: 50,
                      borderRadius: 300,
                    }}
                  >
                    <Feather name="log-out" color={"#fff"} size={25} />
                  </View>
                  <View>
                    <Text style={{ fontWeight: 500, fontSize: 16 }}>
                      Logout
                    </Text>
                  </View>
                </View>
                <View>
                  <Feather name="chevron-right" size={30} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 30,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "red",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 10,
                      width: 50,
                      height: 50,
                      borderRadius: 300,
                    }}
                  >
                    <Feather name="log-out" color={"#fff"} size={25} />
                  </View>
                  <View>
                    <Text style={{ fontWeight: 500, fontSize: 16 }}>
                      Logout
                    </Text>
                  </View>
                </View>
                <View>
                  <Feather name="chevron-right" size={30} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  first_cont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  cont: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
  },
});
