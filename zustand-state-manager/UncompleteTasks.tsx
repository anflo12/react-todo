import create from "zustand";


export type StoreUnComplete = {
  unCompleteTasks: any[];
  changeTaskUnComplete: (tasks: any) => void;
};


export const useStoreUnCompleteTask = create<StoreUnComplete>((set) => ({
  unCompleteTasks: [],
  changeTaskUnComplete: (tasks) =>{
    let data=  tasks.filter((item:any) => item.done === 0);
    set((state) => ({unCompleteTasks:data}))
    console.log("uncompleted")
  }
   
}));
