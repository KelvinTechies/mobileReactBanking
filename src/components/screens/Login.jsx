import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { button1 } from "./common/button";
import axios from "axios";

const Login = ({navigation}) => {
  const [data, setData] = useState({
    Account_num:"",
    password:"",
  })
  const [errMsg, setErrMsg] = useState(null);
  const handleLogin = async() => {
    if (
      data.Account_num == "" ||
      data.password == ""
    ) {
      setErrMsg("All Fields are required");
      return;
    } else {
      await axios.post("http://192.168.145.138:5000/auth/user/login",data,{
        headers: {
            'Content-Type': 'application/json',}
        }).then(res=>{
          if(res.data.status===401){
            setErrMsg(res.data.error)
          }  if(res.data.status==200){
            alert("You are logged in")
            navigation.navigate('dashboard')
          }else  if(res.data.status===403){
            setErrMsg(res.data.error)
          }
       }).catch(e=>console.log(e))

    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.patternBg}
        source={require("../../../assets/images/2.png")}
      />
     <ScrollView>
     <View style={styles.container1}>
        <View style={styles.login_cont}>
          <Text style={styles.LoginTxt}>Login</Text>
          <Pressable>
            <Text style={styles.login_subTxt}>sign in to continue</Text>
          </Pressable>
        </View>
        {errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}

        <View>
          <Text style={styles.labelTxt}>Account Number</Text>
          <TextInput
          keyboardType="number-pad"
              onChangeText={(text) => setData({ ...data, Account_num: text })}
              onPressIn={() => setErrMsg(null)}
          placeholder="codewithsas" style={styles.textInput} />
          <Text style={styles.labelTxt}>Password</Text>
          <TextInput
              onChangeText={(text) => setData({ ...data, password: text })}
              onPressIn={() => setErrMsg(null)}
            secureTextEntry={true}
            placeholder="******"
            style={styles.textInput}
          />
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginBtn}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.forgetPwd}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
            <Text style={styles.forgetPwd}>Sign up?</Text>
          </TouchableOpacity>
        </View>
      </View>
     </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  patternBg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  head: {
    fontSize: 30,
    color: "#fff",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginTxt: {
    color: "#fff",
    fontSize: 50,
  },
  login_subTxt: {
    fontSize: 12,
    color: "#FF5757",
  },
  login_cont: {
    textAlign: "center",
    width: "100%",
    alignItems: "center",
    marginTop: 230,
    justifyContent: "center",
  },
  textInput: {
    width: 270,
    borderColor: "#ccc",
    backgroundColor: "#8F8E8E",
    borderRadius: 10,
    padding: "1.5%",
    color: "#fff",
  },
  labelTxt: {
    color: "#f4f4f4",
    marginBottom: 10,
    marginTop: 10,
  },
  loginBtn: {
    width: 240,
    backgroundColor: "#FF5757",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    margin: 10,
    marginTop: 19,
    fontWeight: "600",
  },
  forgetPwd: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
});
