import React, { useState } from 'react'

export default function sub() {
    const[sub1,setSub1]=useState(0)
    const[sub2,setSub2]=useState(0)
    const[op,setOp]=useState(0)
    
  return (
    <div>
       <input type="text"  placeholder="enter the number" onChange={(e)=>setSub1(Number(e.target.value))}/>
        <input type="text"  placeholder="enter the number" onChange={(e)=>setSub2(Number(e.target.value))}/>
      <h1>{op}</h1>
      <button onClick={()=>setOp(sub1-sub2)}>subtract</button>
       
    </div>
  )
}
