import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./home/Home";
import ListRequisites from "./home/ListRequisites";
import RequisiteDetails from './home/RequisiteDetails'

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home!</Text>
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen name="Requisites" component={ListRequisites} />
      <Stack.Screen name="Details" component={RequisiteDetails} />
    </Stack.Navigator>
  );
};

export default function MainView() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeNavigator}
        />
        <BottomTab.Screen
          options={{ headerShown: false }}
          name="Travels"
          component={HomeScreen}
        />
        <BottomTab.Screen
          options={{ headerShown: false }}
          name="About us"
          component={HomeScreen}
        />
        <BottomTab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={HomeScreen}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
