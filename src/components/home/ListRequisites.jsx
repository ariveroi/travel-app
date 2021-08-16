import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { requisites } from "./requisites";
import RequisiteButton from "../../common/requisiteButton";

// const listRequisites = requisites.map((requisite, index) => (
//   <TouchableOpacity key={index}>
//     <Text>{requisite.title}</Text>
//   </TouchableOpacity>
// ));

export default function ListRequisites({ navigation, route }) {
  // console.log(route.params);
  const [countryRequisites, setCountryRequisites] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    requisites.find((element) => {
      if (element.id === route.params.to.countryId) {
        setCountryRequisites(element.requisites);
        setCountryName(element.name);
        return;
      }
    });
  }, [countryRequisites]);

  const listRequisites = countryRequisites.map((requisite, index) => (
    <View key={index}>
      {/* <CheckBox
        value={requisite.done}
        // onValueChange={() => uncheckRequisite(index)}
      /> */}
      <RequisiteButton
        onPress={() => navigation.navigate("Details", { requisite })}
        title={requisite.title}
      />
      {/* <TouchableOpacity key={index}>
        <Text>
          {countryName}: {requisite.title}
        </Text>
      </TouchableOpacity> */}
    </View>
  ));

  return (
    <View>
      <Text>To: {route.params.to.title || ""}</Text>
      <Text>From: {route.params.from.title || ""}</Text>
      <Text>Requisites</Text>
      <View style={style.scrollViewContainer}>
        <ScrollView style={style.scrollView}>{listRequisites}</ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  scrollViewContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "80%",
  },
});
