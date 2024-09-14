import React, { useState } from 'react'

export default function AgregarTarea({onAdd}) {
  
  
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const handleClick = () => {
    if(nuevaTarea.length !== 0){
      onAdd(nuevaTarea);
      setNuevaTarea('');
    }
  };

  return (
    <div>
        <input 
          type="text" 
          placeholder="Ingrese una Tarea" 
          value={nuevaTarea}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleClick}>ADD</button>
    </div>
  )
}
