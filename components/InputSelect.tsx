import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import SelectInput from "@tele2/react-native-select-input";

interface props {
  items: items[];
  onchange: (value: any) => void;
  value: string;
  label: string
}

type items = {
  label: string;
  value: string;
};
export default function InputSelect({ items, onchange, value,label }: props) {
  return (
    <SelectInput
      label={label}
      value={value}
      labelStyle={styles.label}
      valueContainerStyle={styles.input}
      containerStyle={{height:20, borderColor:'white'}}
      innerContainerStyle={{
        height: -90,
        borderColor: "white",
      }}
      options={items}
      onChange={(value: any) => onchange(value)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    height: 40,
  },
  input: {
    backgroundColor: "#F9F9F9",
    paddingLeft: 16,
    marginBottom: 20,
    borderRadius: 10,
    height: 40,
  },
  label: { fontSize: 15, color: "black", fontWeight: "bold", marginLeft: 5 },
});
