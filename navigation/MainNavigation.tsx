import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./TabsNavigation";
import CreateTaskScreen from "../screens/createTask/CreateTaskScreen";

export default function MainNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ title: "Board" }}
        component={TabsNavigation}
      />
      <Stack.Screen name="CreateTask" options={{ title: "CreateTask" }} component={CreateTaskScreen} />
    </Stack.Navigator>
  );
}
