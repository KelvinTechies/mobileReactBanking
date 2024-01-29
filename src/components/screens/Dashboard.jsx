import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Octicons,
  Entypo,
} from "@expo/vector-icons/";
import Subdashboard from "./Subdashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./Settings";
import Division from "./common/Division";
import Login from "./Login";
import SignUp from "./SignUp";
import { NavigationContainer } from "@react-navigation/native";

export default function Dashboard({navigation}) {
  const Tab = createBottomTabNavigator();

  return (
 <>
 <Tab.Navigator
          barStyle={{ backgroundColor: "#FFF5F5" }}
          screenOptions={{
            tabBarActiveTintColor: "#262424",
            tabBarInactiveTintColor: "#ccc",
            tabBarItemStyle: {  height: 40 },
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              headerTitle: "",
              headerShown: false,
              tabBarIconStyle:{fontWeight:700},
              tabBarBadgeStyle:{width: 40, height: 40  },
              tabBarIcon: ({ focused, size }) => (
                <FontAwesome name="home" color={`${focused? "#262424":"#ccc"}`} size={15} />
              ),
            }}
          />
          <Tab.Screen
            name="settings"
            options={{
              title: "Settings",
              tabBarIconStyle:{fontWeight:700},
              tabBarIcon: ({ focused,size }) => (
                <Entypo name="user" color={`${focused? "#262424":"#ccc"}`} size={15} />
              ),
            }}
            component={Settings}
          />
            <Tab.Screen
            name="Reward"
            component={SignUp}
            options={{
              headerTitle: "",
              headerShown: false,
              tabBarIconStyle:{fontWeight:700},
              tabBarBadgeStyle:{width: 40, height: 40  },
              tabBarIcon: ({ focused, size }) => (
                <FontAwesome name="diamond" color={`${focused? "#262424":"#ccc"}`} size={15} />
              ),
            }}
          />
          <Tab.Screen name="Division" 
            options={{
              title: "Invest",
              tabBarIconStyle:{fontWeight:700},

              tabBarIcon: ({ focused,size }) => (
          <MaterialCommunityIcons name="finance" size={24} color={`${focused? "#DAD7D7":"#ccc"}`} />
              ),
            }}
          component={Division} />
          <Tab.Screen name="Rewards"     options={{
              title: "Invest",
              tabBarIconStyle:{fontWeight:700},

              tabBarIcon: ({ focused,size }) => (
          <MaterialCommunityIcons name="finance" size={24} color={`${focused? "#DAD7D7":"#ccc"}`} />
              ),
            }} component={Login} />
        </Tab.Navigator>
    <ScrollView>
    <View style={styles.dashboardContainer}>
        <View style={styles.profileSection}>
          <View style={styles.profileSection1}>
            <View style={styles.imgContainer}>
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
                source={require("../../../assets/images/wepik-export-20240128004745sExC.png")}
              />
            </View>
            <Text>Hi Osas</Text>
          </View>
          <View style={styles.profileSection1}>
            <FontAwesome6 name="headphones" size={15} color="#ccc" />
            <MaterialCommunityIcons name="line-scan" size={15} color="#ccc" />
            <MaterialIcons name="notifications" size={15} color="#ccc" />
          </View>
        </View>

        <View style={styles.dashboardArea}>
          <View style={styles.dashboardSection1}>
            <View style={styles.dashboardSection2}>
              <MaterialIcons name="verified-user" size={15} color="#fff" />
              <Text style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>
                Available Balance
              </Text>
              <FontAwesome name="eye" size={15} color="#fff" />
            </View>
            <View style={styles.dashboardSection3}>
              <Text style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>
                Transaction History
              </Text>
              <Octicons  name="chevron-right" size={15} color="#fff" />
            </View>
          </View>

          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15, alignItems:"center"}}>
            <Text style={{ fontSize: 25, color: "#fff", fontWeight: 600 }}>$0.00</Text>
            <Pressable>
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 120,
                  borderRadius: 20,
                  padding: 10,
                  alignItems: "center",
                }}
              >
             
                <Text
                  style={{ fontSize: 15, color: "#FF5757", fontWeight: 600 }}
                >
                <Entypo name="plus" size={24} color="#FF5757" />  Add Money
                </Text>
                
              </View>
            </Pressable>
          </View>
        </View>
        <Subdashboard/>
      </View>
    </ScrollView>
 </>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    margin: 10,
    backgroundColor: "#f3f3f3",
    height:"100%",
    marginTop:50
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: "100%",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:30
  },
  profileSection1: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dashboardArea: {
    backgroundColor: "#FF5757",
    borderRadius: 15,
    padding: 10,
  },
  dashboardSection1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dashboardSection2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dashboardSection3: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
