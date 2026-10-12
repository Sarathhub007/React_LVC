import React, { memo } from 'react'

function Student({name}) {
    console.log("Student rendered");
  return <h2>Student :{name}</h2>
  
}

export default memo(Student);