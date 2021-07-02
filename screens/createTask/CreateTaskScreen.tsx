import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import InputComponent from "../../components/InputComponent";
import {  useStoreAll } from "../../zustand-state-manager/TaskStore";
import InputPickerComponent from "../../components/InputPickerComponent";
import InputSelect from "../../components/InputSelect";

export interface itemTask {
  name: string;
  deadLines: "";
  startTime: string;
  endTime: string;
  select1: string;

  select2: string;
}
export default function CreateTaskScreen({ navigation }: any) {
  const addTask = useStoreAll((state) => state.addTask);
  const [task, setTask] = useState<itemTask>({
    name: "",
    select1: "",
    deadLines: "",
    startTime: "",
    endTime: "",
    select2: "",
  });

  const items = [
    { label: "5 minutes early", value: "5 minutes" },
    { label: "10 minutes early", value: "10 minutes" },
    { label: "15 minutes early", value: "15 minutes" },
  ];
  const items2 = [{ label: "Weekly", value: "Weekly repeat" },{ label: "Anualy", value: "Anualy" }];
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, marginTop: 20 }}>
        <InputComponent label="Title" value={task.name}  onchange={(value: any) => setTask({ ...task, name: value })}/>
        <InputPickerComponent
          label="DeadLine"
          type="date"
          onchange={(value: any) => setTask({ ...task, deadLines: value })}
        />
        {/*  row 2 */}
        <View style={{ flexDirection: "row", marginTop: 20, width: "65%" }}>
          <InputPickerComponent
            styleinput={{ width: "67%" }}
            label="Start time"
            type="time"
            onchange={(value: any) => setTask({ ...task, startTime: value })}
          />
          <InputPickerComponent
            styleinput={{ width: "67%" }}
            label="End time"
            type="time"
            onchange={(value: any) => setTask({ ...task, endTime: value })}
          />
        </View>
        <InputSelect
          items={items}
          label="Remind"
          value={task.select1}
          onchange={(value) => setTask({ ...task, select1: value })}
        />

        <InputSelect
          items={items2}
          label="Repeat"
          value={task.select2}
          onchange={(value) => setTask({ ...task, select2: value })}
        />
      </View>

      <Button
        title="Create a task"
        buttonStyle={{ backgroundColor: "#60BF78", height: 47 }}
        onPress={() => {
          addTask(task);
          navigation.navigate("Home");
        }}
        containerStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 10,
  },

  container: { flex: 1, backgroundColor: "white", paddingHorizontal: 20 },
});
