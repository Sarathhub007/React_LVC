import { useState } from "react";

export default function Add() {
  const[add1, setAdd1] = useState(0);
    const[add2, setAdd2] = useState(0);
  const[op,setOp]=useState(0);

  return (
    <div>
      <input type="text"  placeholder="enter the number" onChange={(e)=>setAdd1(Number(e.target.value))}/>
        <input type="text"  placeholder="enter the number" onChange={(e)=>setAdd2(Number(e.target.value))}/>
      <h1>{op}</h1>
      <button onClick={()=>setOp(add1+add2)}>add</button>
    </div>
  );
}
