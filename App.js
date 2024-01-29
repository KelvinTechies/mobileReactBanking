import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Welcomes from "./src/components/screens/Welcomes";
import Login from "./src/components/screens/Login";
import SignUp from "./src/components/screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Verify from "./src/components/screens/Verify";
import Dashboard from "./src/components/screens/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons,Entypo,MaterialCommunityIcons } from "@expo/vector-icons";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Settings from "./src/components/screens/Settings";
import Division from "./src/components/screens/common/Division";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Subdashboard from "./src/components/screens/Subdashboard";
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcomes">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Welcomes"
            component={Welcomes}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="signup"
            component={SignUp}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="verify"
            component={Verify}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="dashboard"
            component={Dashboard}
          />
        </Stack.Navigator>
       
      </NavigationContainer>


      {/* <NavigationContainer> */}
      {/*   <Tab.Navigator
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
        </Tab.Navigator> */}
        {/* <Drawer.Navigator>
      <Drawer.Screen options={{
        drawerIcon:({focus})=>(
          <AntDesign name="logout" size={24} color="#FF5757" />
        )
      }} name="Logout" component={Subdashboard} />
    </Drawer.Navigator> */}
      {/* </NavigationContainer> */}

       {/* <Verify /> */}
      {/*     // <Verify />


      <Dashboard /> */}
      {/* <Dashboard /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
