import React, { use, useState } from "react";

export default function Calc() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [op, setOp] = useState(0);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter the number1"
          value={input1}
          onChange={(e) => setInput1(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Enter the number2"
          value={input2}
          onChange={(e) => setInput2(Number(e.target.value))}
        />
      </div>
      <h1>{op}</h1>

      <div>
        <button onClick={() => setOp(input1 + input2)}>Add</button>
        <button onClick={() => setOp(input1 - input2)}>Sub</button>
        <button onClick={() => setOp(input1 * input2)}>multi</button>
        <button onClick={() => setOp(input1 / input2)}>divide</button>
      </div>
    </>
  );
}
