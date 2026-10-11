import React, { useState } from "react";

export default function Additem({ additem }) {
  const [item, setItem] = useState("");
  function handleadd() {
    if (item.trim() === "") return;
    additem(item);
    setItem("");
  }
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        
      />

      <button onClick={handleadd}> Add</button>
    </div>
  );
}
