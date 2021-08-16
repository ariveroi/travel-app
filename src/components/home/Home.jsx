import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

import Button from "../../common/button";
import { countries } from "./countries";

// const countries = [
//   {
//     id: "1",
//     title: "Madrid, Spain",
//   },
//   {
//     id: "2",
//     title: "Barcelona, Spain",
//   },
// ];

const Dropdown = (props) => {
  return (
    <AutocompleteDropdown
      clearOnFocus={false}
      closeOnBlur={true}
      closeOnSubmit={false}
      onSelectItem={props.function}
      dataSet={props.dataSet}
      textInputProps={{
        placeholder: "City, Country...",
        autoCorrect: false,
        autoCapitalize: "none",
        style: {
          backgroundColor: "#fff",
          color: "#383b42",
          paddingLeft: 18,
        },
      }}
      rightButtonsContainerStyle={{
        backgroundColor: "#fff",
      }}
    />
  );
};

export default function Home({ navigation }) {
  // const navigation = useNavigation<homeScreenProps>();

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [showFrom, setShowFrom] = useState(false);

  const selectTravel = () => {
    setShowFrom(true);
  };

  const submitForm = () => {
    navigation.navigate("Requisites", { to, from });
  };

  return (
    <View style={style.container}>
      <View style={style.travelForm}>
        <View style={style.inputContainer}>
          <Text>Where do you want to travel?</Text>
          <Dropdown
            function={setTo}
            dataSet={countries}
            placeholder="City, Country..."
          />
        </View>
        <View style={style.inputContainer}>
          <Text>From where?</Text>
          <Dropdown
            function={setFrom}
            dataSet={countries}
            placeholder={"City, Country"}
          />
        </View>
        <View style={style.buttonContainer}>
          <Button onPress={submitForm} title="Go!" color="#fff" />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  travelForm: {
    width: "80%",
    // height: "15%",
    display: "flex",
    justifyContent: "space-between",
  },
  countryInput: {
    height: 40,
    width: "90%",
    backgroundColor: "#a0a0a0",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    margin: 20,
    // width: "100%",
  },
  inputContainer: {
    marginTop: 15,
  },
  fromContainer: {},
});
