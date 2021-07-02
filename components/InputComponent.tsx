import React from "react";
import { View, Text } from "react-native";
import { Input, TextLabel } from "../screens/createTask/styles";

export default function InputComponent({ label, value, onchange }:any) {
  return (
    <View>
      <TextLabel>{label}</TextLabel>
      <Input  onChangeText={txt => onchange(txt)} value={value} />
    </View>
  );
}
