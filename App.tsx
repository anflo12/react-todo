import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./navigation/MainNavigation";
import { openDatabase } from "./dbSqlite/db";
import {  useStoreAll } from "./zustand-state-manager/TaskStore";

export default function App() {
  const db = openDatabase();
  const { tasks, loadTasks } = useStoreAll((state) => state);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, done int ,name TEXT, deadline TEXT, startTime TEXT ,endTime TEXT, remind TEXT, repeat TEXT )",
     [],
      
      (error=>console.log(error))
  
      );
    },(error)=>console.log(error));

    if (tasks.length === 0) {
      db.transaction((tx) => {
        tx.executeSql("select * from items", [], (_, { rows }) =>
          loadTasks(rows)
        );
      });
    }
  }, []);

  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
