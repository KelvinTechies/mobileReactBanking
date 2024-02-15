import { View, Text } from "react-native";
import React from "react";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Octicons,
  Entypo,
} from "@expo/vector-icons/";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./Settings";
import Division from "./common/Division";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Welcomes from "./Welcomes";
const BottomNav = ({ route, navigation }) => {
  const Tab = createBottomTabNavigator();
  const { userInfo } = route.params;
  // console.log(userInfo);
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      barStyle={{ backgroundColor: "#FFF5F5" }}
      screenOptions={{
        tabBarActiveTintColor: "#262424",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        initialParams={{ userInfo: userInfo.user }}
        component={Dashboard}
        options={{
          headerTitle: "",
          headerShown: false,
          tabBarIconStyle: { fontWeight: 700 },
          tabBarBadgeStyle: { width: 40, height: 40 },
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="home"
              color={`${focused ? "#262424" : "#ccc"}`}
              size={15}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        initialParams={{ userInfo: userInfo.user }}
        options={{
          tabBarIconStyle: { fontWeight: 700 },

          // headerShown: "",
          tabBarIcon: ({ focused, size }) => (
            <Entypo
              name="user"
              color={`${focused ? "#262424" : "#ccc"}`}
              size={15}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reward"
        component={SignUp}
        options={{
          headerTitle: "",
          headerShown: false,
          tabBarIconStyle: { fontWeight: 700 },
          tabBarBadgeStyle: { width: 40, height: 40 },
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome
              name="diamond"
              color={`${focused ? "#262424" : "#ccc"}`}
              size={15}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Division"
        options={{
          title: "Invest",
          tabBarIconStyle: { fontWeight: 700 },

          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="finance"
              size={24}
              color={`${focused ? "#DAD7D7" : "#ccc"}`}
            />
          ),
        }}
        component={Division}
      />
      <Tab.Screen
        name="Rewards"
        options={{
          title: "Invest",
          tabBarIconStyle: { fontWeight: 700 },

          tabBarIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="finance"
              size={24}
              color={`${focused ? "#DAD7D7" : "#ccc"}`}
            />
          ),
        }}
        component={Login}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
