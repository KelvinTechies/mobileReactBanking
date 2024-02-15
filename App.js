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
import {
  FontAwesome,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Settings from "./src/components/screens/Settings";
import Division from "./src/components/screens/common/Division";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Subdashboard from "./src/components/screens/Subdashboard";
import { AntDesign } from "@expo/vector-icons";
import BottomNav from "./src/components/screens/BottomNav";
import Edit from "./src/components/screens/Edit";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import Password from "./src/components/screens/Password";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };
  const user = AsyncStorage.getItem("userInfo");
  console.log(user.access_token);
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcomes">
            {/* {user.access_token ? ( */}
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="login"
              component={Login}
            />
            {/*    ) : (
              <>  */}
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
              component={BottomNav}
            />
            <Stack.Screen name="Edit Profile" component={Edit} />
            <Stack.Screen name="Change Password" component={Password} />
            {/*      </>
            )} */}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
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
