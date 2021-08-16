import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ButtonProps,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

export default function requisiteButton(props: ButtonProps) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={style.container}>
      <CheckBox
        value={isSelected}
        onValueChange={() => setIsSelected(!isSelected)}
      />
      <TouchableOpacity onPress={props.onPress} style={style.button}>
        <Text style={style.textButton}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  button: {
    width: "90%",
  },
  textButton: {},
});
