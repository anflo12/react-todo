import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import ListComponent from "../components/ListComponent";
import { useStoreCompleteTask } from "../zustand-state-manager/CompleteStore";
import { useStoreAll } from "../zustand-state-manager/TaskStore";
import shallow from "zustand/shallow"
export default function CompleteTasks(props: any) {
  const [forceUpdate, setforceUpdate] = useState<number>(0)
  const { completeTasks, changeTaskComplete } = useStoreCompleteTask((state) => (state), shallow);
  const { changeState,tasks } = useStoreAll((state) => (state),shallow);


  useEffect(() => {
    changeTaskComplete(tasks);
    setforceUpdate(n => n+1)
  }, [ tasks ]);

 
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ListComponent
          data={completeTasks}
          onchange={(id) => {
            changeState(id)
            changeTaskComplete(tasks);
            setforceUpdate(n => n+1)
          }}
        />
      </View>

      <Button
        title="Add a task"
        buttonStyle={{ backgroundColor: "#60BF78", height: 47 }}
        onPress={() => props.navigation.navigate("CreateTask")}
        containerStyle={{
          marginHorizontal: 20,
          marginBottom: 12,
          borderRadius: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 20,
  },
});
