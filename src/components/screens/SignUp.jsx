import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "./common/globalStyle";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [data, setData] = useState({
    firstname: "",
    email: "",
    password: "",
    cpwd: "",
    phone_num: "",
  });
  const [errMsg, setErrMsg] = useState(null);
  const [user, setUser] = useState("");

  const handleSignUp = () => {
    if (
      data.firstname == "" ||
      data.email == "" ||
      data.password == "" ||
      data.cpwd == "" ||
      data.phone_num == ""
    ) {
      setErrMsg("All Fields are required");
      return;
    } else if (data.password !== data.cpwd) {
      setErrMsg("Password MixMatched");
    } else {
      axios
        .post("http://192.168.14.138:5000/auth/user/register", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status === 401) {
            setErrMsg(res.data.error);
          } else if (res.data.status === 400) {
            setErrMsg(res.data.error);
          } else if (res.data.status === 201) {
            alert(res.data.message);
            setUser(res.data.user_id);
            navigation.navigate("verify", {
              user_id: res.data.user_id,
              user: res.data.user,
            });
          } else if (res.data.status === 204) {
            setErrMsg(res.data.error);
          }
        })
        .catch((e) => console.log(e));

      //   fetch("http://192.168.121.138:5000/auth/user/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => console.log(data));
    }
  };

  return (
    <View style={styles.signUpContainer}>
      <Image
        style={styles.bgPattern}
        source={require("../../../assets/images/Untitled design (2).png")}
      />
      <ScrollView>
        <View style={styles.signUpContainer}>
          <View style={styles.cont_1}>
            <View style={GlobalStyles.login_cont}>
              <Text style={styles.signUpTxt}>Sign Up</Text>
              <TouchableOpacity onPress={() => navigation.navigate("login")}>
                <Text style={styles.alreadyReg}>
                  {" "}
                  Already registered? Login Here
                </Text>
              </TouchableOpacity>
            </View>
            {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
            <View>
              <View>
                <Text style={GlobalStyles.labelTxt}>Name</Text>

                <TextInput
                  placeholder="Osagioduwa Oviasuyi"
                  style={GlobalStyles.textInput}
                  onChangeText={(text) => setData({ ...data, firstname: text })}
                  onPressIn={() => setErrMsg(null)}
                />
              </View>
              <View>
                <Text style={GlobalStyles.labelTxt}>Email</Text>

                <TextInput
                  keyboardType="email-address"
                  placeholder="oviasuyiosagioduwa@gmail.com"
                  style={GlobalStyles.textInput}
                  onChangeText={(text) => setData({ ...data, email: text })}
                  onPressIn={() => setErrMsg(null)}
                />
              </View>

              <View>
                <Text style={GlobalStyles.labelTxt}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="******"
                  style={GlobalStyles.textInput}
                  onChangeText={(text) => setData({ ...data, password: text })}
                  onPressIn={() => setErrMsg(null)}
                />
              </View>
              <View>
                <Text style={GlobalStyles.labelTxt}>Confirm Password</Text>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  style={GlobalStyles.textInput}
                  onChangeText={(text) => setData({ ...data, cpwd: text })}
                  onPressIn={() => setErrMsg(null)}
                />
              </View>
              <View>
                <Text style={GlobalStyles.labelTxt}>Phone Number</Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder=" Your Phone number"
                  style={GlobalStyles.textInput}
                  onChangeText={(text) => setData({ ...data, phone_num: text })}
                  onPressIn={() => setErrMsg(null)}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={handleSignUp}
                  style={GlobalStyles.loginBtn}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  bgPattern: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  signUpContainer: {
    width: "100%",
    height: "100%",
  },
  signUpTxt: {
    fontSize: 30,
    color: "#fff",
  },
  signUpContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000099",
    width: "100%",
  },

  cont_1: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  alreadyReg: {
    color: "#FF5757",
    fontSize: 10,
    marginTop: 7,
  },
  errMsg: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#f50257",
    padding: 5,
    borderRadius: 10,
    marginTop: 5,
    width: 270,
  },
});
