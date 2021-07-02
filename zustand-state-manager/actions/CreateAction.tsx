import { SetState } from "zustand";
import { openDatabase } from "../../dbSqlite/db";
import { itemTask } from "../../screens/createTask/CreateTaskScreen";
import { Store, } from "../TaskStore";
const db = openDatabase();

export const addTaskBD = (task: itemTask, set: SetState<Store>) => {
  const { name, select1, startTime, endTime, deadLines, select2 } = task;
  //console.log(name)
  
  
   db.transaction((tx) => {
    return tx.executeSql(
      `insert into items (done,name , deadline , startTime  ,endTime , remind , repeat ) values (0, "${name}",'${deadLines}',"${startTime}","${endTime}","${select1}","${select2}")`,
      [],
      (tx, results) => {

        if (results.rowsAffected > 0) {
          tx.executeSql("select * from items", [], (_, { rows }) => set((state) => ({ tasks: rows._array }))
          );
        }
      },
      (tx, err) => {
        console.log(err )
        return true
      }
    );
  }, (err) => console.log(err)); 
};

export const updateTaskInDB =(id:string, done:number)=>{
  db.transaction((tx) => {
    return tx.executeSql(
      `UPDATE items set done=? where id= ?`,
      [done,id],
      (tx, results)=>{},
      (tx, err) => {
        console.log(err )
        return true
      }
    );
  }, (err) => console.log(err)); 

}