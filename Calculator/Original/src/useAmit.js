import { useState } from "react";

const useAmit = () => {
  const [count,setCount] = useState(0)
  function Incr(){
    setCount(count+1)
  }
  function Decr(){
    setCount(count-1)
  }
  return [count,Incr,Decr]
}

export default useAmit