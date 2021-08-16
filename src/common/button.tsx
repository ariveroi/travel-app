import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ButtonProps,
} from "react-native";

interface StyledButtonProps extends ButtonProps {}

export default function Button(props: StyledButtonProps) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={style.button}>
        <Text style={style.textButton}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    backgroundColor: "#383b42",
    width: 80,
    height: 40,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    margin: "auto",
  },
});
