import React from "react";

export default function ItemList({ items,deleteItems }) {
  return (
    <div>
      <h2>Item List</h2>

      {items.map((item, index) => (
        <p key={index}>
          {index + 1}. {item}
          <button  onClick={()=>deleteItems(item)}>
delete
</button>
        </p>

    
      ))}
    </div>
  );
}