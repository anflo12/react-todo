import create from "zustand";
import { addTaskBD, updateTaskInDB } from "./actions/CreateAction";
export type Store = {
  tasks: any[];
  change:boolean,
  addTask: (task: any) => void;
  loadTasks: (rows: any) => void;
  changeState: (id: string) => void;
};

export const useStoreAll = create<Store>((set, get) => ({
  tasks: [],
  change:false,
  addTask: (taskItem) => addTaskBD(taskItem, set),
  loadTasks: (rows) => set((state) => ({ tasks: rows._array })),
  changeState: (id) => {
    let data= get().tasks;
    data.map((task) => {
      if (task.id === id) {
        task.done = task.done === 0 ? 1 : 0;
        
        updateTaskInDB(id,task.done)
      }
     
    });
    let status = !get().change
    set((state) => ({tasks:data, change: !status }))
    console.log("data", get().tasks);
  },
}));
