import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function UserContext() {
    const{name,setName}=useContext(ThemeContext);
  return (
    <div>
        <h1>
            this is used for the name 
        </h1>
        <p>
            my name is :{name}
        </p>
        <button onClick={()=>setName("chandra")}>
            change name
        </button>
    </div>
  )
}
