import React from "react";
import { View, Text } from "react-native";

export default function RequisiteDetails({ navigation, route }) {
  //   console.log(route.params);
  return (
    <View>
      <Text>{route.params.requisite.title}</Text>
      <Text>{route.params.requisite.details}</Text>
    </View>
  );
}
