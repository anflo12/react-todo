import create from "zustand";
import { useStoreAll } from "./TaskStore";

export type StoreComplete = {
  completeTasks: any[];
  changeTaskComplete: (tasks: any) => void;
};

export const useStoreCompleteTask = create<StoreComplete>((set) => ({
  completeTasks: [],
  changeTaskComplete: (tasks) =>{
    const data=  tasks.filter((item) => item.done === 1);
    set((state) => ({completeTasks:data}))
  }
   
}));
