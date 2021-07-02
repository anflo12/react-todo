import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Icon } from "react-native-elements";
import { InputPicker, TextLabel } from "../screens/createTask/styles";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function InputPickerComponent({
  label,
  type,
  styleinput,
  onchange,
}: any) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [curentDate, setcurentDate] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const formatYmd = (date: { toISOString: () => string | any[] }) =>
    date.toISOString().slice(0, 10);

  const onChange = (event: any, selectedDate: Date): void => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    if (type === "date") {
      setDate(currentDate);
      setcurentDate(formatYmd(date).toString());
      onchange(formatYmd(currentDate));
    } else {
      setDate(currentDate);
      setcurentDate(currentDate.toLocaleTimeString());
      onchange(currentDate.toLocaleTimeString());
    }
  };

  return (
    <View>
      <TextLabel> {label} </TextLabel>
      <TouchableOpacity onPress={() => setShow(true)}>
        <InputPicker style={styleinput}>
          <Text style={{ alignSelf: "center", fontSize: 12, color: "gray" }}>
            {curentDate}
          </Text>

          <Icon
            color="gray"
            type="material-community"
            name={
              type === "date" ? "calendar-today" : "clock-time-five-outline"
            }
          />
        </InputPicker>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={type}
          display="default"
          onChange={(event: any, value: Date | undefined) =>
            onChange(event, value!)
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
