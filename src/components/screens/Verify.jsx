import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useRef } from "react";
import axios from "axios";

const input = Array(5).fill("");
let newInputIndex = 0;
const isObjvalid = (obj) => {
  return Object.values(obj).every((val) => val.trim());
};
export default function Verify({ route, navigation }) {
  const { user_id, user } = route.params;
  console.log({ user: user });
  const [otp, setOtp] = useState({ 0: "", 1: "", 2: "", 3: "", 4: "" });
  const inputRef = useRef();
  const [nextInputIndex, setNextInputIndex] = useState(0);
  const handleTextChange = (text, index) => {
    const newOtp = { ...otp };
    newOtp[index] = text;
    setOtp(newOtp);

    const lastInputIndex = input.length - 1;
    if (!text) newInputIndex = index === 0 ? 0 : index - 1;
    else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    setNextInputIndex(newInputIndex);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [nextInputIndex]);

  const submitOTP = async () => {
    Keyboard.dismiss();
    if (isObjvalid(otp)) {
      let val = "";
      Object.values(otp).forEach((v) => {
        val += v;
      });

      if (val === "") {
        console.log("All fields are required");
      }

      await axios
        .post("http://192.168.14.138:5000/auth/user/verifyO_t_p", {
          val,
          user_id,
        })
        .then((res) => {
          if (res.data.status === 200) {
            // alert(res.data.message);
            navigation.navigate("dashboard", user);
          } else if (res.data.status === 404) {
            alert(res.data.error);
          } else if (res.data.status === 400) {
            alert(res.data.error);
          } else if (res.data.status === 401) {
            alert(res.data.error);
          } else if (res.status === 400) {
            alert(res.status);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <View style={styles.verifyContainer}>
      <Image
        style={styles.bgPattern}
        source={require("../../../assets/images/Untitled design (2).png")}
      />
      <View style={styles.verify_cont}>
        <Text style={styles.text}>Verify</Text>
        <Text style={styles.text1}>A Message has been Sent to your Email</Text>
        <Text style={styles.text1}>
          Enter the O.T.P that was sent to your Email
        </Text>

        <View style={{ alignItems: "center" }}>
          <View style={styles.text_cont}>
            {/* <KeyboardAvoidingView> */}
            {input.map((inp, index) => {
              return (
                <View style={styles.inPutMap} key={index.toString()}>
                  <TextInput
                    placeholder="0"
                    value={otp[index]}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={nextInputIndex === index ? inputRef : null}
                    style={styles.input_text}
                    onChangeText={(text) => handleTextChange(text, index)}
                  />
                </View>
              );
            })}

            {/* </KeyboardAvoidingView> */}
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF5757",
              width: 200,
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
            onPress={submitOTP}
          >
            <Text style={{ color: "#fff", fontSize: 30 }}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const inputWidth = Math.round(width / 6);
const styles = StyleSheet.create({
  verifyContainer: {
    height: " 100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  bgPattern: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 10,
  },
  text1: {
    color: "white",
    fontSize: 15,
  },
  verify_cont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 65,
  },
  inPutMap: {
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row",
    marginTop: 45,
    alignItems: "center",
    textAlign: "center",
  },
  input_text: {
    width: 70,
    height: 70,
    borderColor: "#ccc",
    backgroundColor: "#8F8E8E",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text_cont: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
