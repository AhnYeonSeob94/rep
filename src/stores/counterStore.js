import {create} from "zustand"

//decrease 만들기
const counterStore = create((set)=>({
    count: 1,
    increase:()=>set((state)=>({count: state.count +1 })),
    increaseBy: (value)=>set((state)=>({count: state.count + value})),
    decrease:()=>set((state)=>({count: state.count -1 })),
    decreaseBy: (value)=>set((state)=>({count: state.count - value})),
}))

export default counterStore;