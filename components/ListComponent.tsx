import React, { useState } from "react";
import { View, Text, FlatList, RefreshControl } from "react-native";
import { CheckBox } from "react-native-elements";

 interface propsList  {
    data : any[],
    onchange:(id: string)=> void,
    
}
export default function ListComponent(props: propsList) {

 const {data,refresh,onRefresh} = props;

const changeColor =(done:number)=>{
  switch (done) {
    case 0:
      return "red"
    
    case 1 :
      return 'green'
  
    default:
      break;
  }
}
  return (
    <View>
      <FlatList
      
        data={data}
        style={{ marginTop: 12 }}
        keyExtractor={(item, index) => index.toString()}
        
        renderItem={({ item, index }) => (
          <CheckBox
            title={item.name}
            checked={item.done===0?false:true}
            uncheckedColor={changeColor(item.done)}
            checkedColor={changeColor(item.done)}
            onPress={() => props.onchange(item.id)}
          />
        )}
      />
    </View>
  );
}
function done(done: any): string | undefined {
  throw new Error("Function not implemented.");
}

