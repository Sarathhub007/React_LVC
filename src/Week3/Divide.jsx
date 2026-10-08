import React, { useState } from "react";

export default function Divide() {
    const[div1,setDiv1]=useState(0)
     const[div2,setDiv2]=useState(0)
      const[op,setOp]=useState(0)
  return (
    <div>
  
       <input type="text"  placeholder="enter the number" onChange={(e)=>setDiv1(Number(e.target.value))}/>
        <input type="text"  placeholder="enter the number" onChange={(e)=>setDiv2(Number(e.target.value))}/>
      <h1>{op}</h1>
      <button onClick={()=>setOp(div1/div2)}>divide</button>
    </div>
  );
}
