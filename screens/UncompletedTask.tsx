import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import ListComponent from "../components/ListComponent";
import { useStoreAll } from "../zustand-state-manager/TaskStore";
import { useStoreUnCompleteTask } from "../zustand-state-manager/UncompleteTasks";
import shallow from "zustand/shallow"
export default function UnCompletedTask(props: any) {
  const [forceUpdate, setforceUpdate] = useState<number>(0)

  const { unCompleteTasks, changeTaskUnComplete } = useStoreUnCompleteTask(
    (state) => (state),
    
  );
  
  const { changeState,tasks } = useStoreAll((state) => state);


  useEffect(() => {
    changeTaskUnComplete(tasks);
    setforceUpdate(n => n+1)
    console.log("uncompleted")
  }, [ tasks]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ListComponent
          data={unCompleteTasks}
          onchange={(id) => {
            changeState(id)
            changeTaskUnComplete(tasks);
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

