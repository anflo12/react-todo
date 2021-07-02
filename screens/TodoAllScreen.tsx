import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import ListComponent from "../components/ListComponent";
import { useStoreAll } from "../zustand-state-manager/TaskStore";

export default function TodoAllScreen(props:any) {
  const [forceUpdate, setforceUpdate] = useState<number>(0)
  const {tasks, changeState} = useStoreAll(state=> state) 
  return (
    <View style={styles.container}>
     <View style={{flex:1}}>
     <ListComponent data={tasks} onchange={(id)=> {
       changeState(id)
       setforceUpdate(state=> state+1)
     }}/>
     </View>
      
      <Button
        title="Add a task"
        buttonStyle={{ backgroundColor: "#60BF78" , height:47,}}
        onPress={()=>props.navigation.navigate("CreateTask")}
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
    paddingHorizontal:20
  },
});
