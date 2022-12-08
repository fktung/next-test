import { useStore } from "../helper/zustand"

function BearCounter() {
    const count =  useStore((state) => state.count)
    console.log(count);
    
    return <h1>{count} around here ...</h1>
}
  
function Controls() {
    const inc = useStore((state) => state.inc)
    return <button onClick={inc}>one up</button>
}

export {BearCounter, Controls}