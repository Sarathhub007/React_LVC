import React, { useState } from "react";

export default function MessageForm({onSendMessage}) {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={() => onSendMessage(input)}> Send</button>
    </div>
  );
}
