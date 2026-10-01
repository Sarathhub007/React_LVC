import React, { useState } from "react";

export default function Multi() {
    const[ mul1,setMul1]=useState(0)
    const[ mul2,setMul2]=useState(0)
    const[ op,setOp]=useState(0)
  return (
    <div>
   

      <input type="text"  placeholder="enter the number" onChange={(e)=>setMul1(Number(e.target.value))}/>
        <input type="text"  placeholder="enter the number" onChange={(e)=>setMul2(Number(e.target.value))}/>
      <h1>{op}</h1>
      <button onClick={()=>setOp(mul1*mul2)}>Multi</button>
    </div>
  );
}
