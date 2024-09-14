import React, { useState } from 'react'

export default function Item({id, name, onDelete}) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked); 
  };

  const handleDelete = () => {
    onDelete(id);
  }
  
  console.log(onDelete);

  return (
    <div>
      <input type="checkbox" onClick={handleClick} />
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {name}
      </span>

      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}