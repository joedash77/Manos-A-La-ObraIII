import React from 'react'
import Item from '../Atom/Item'

export default function ListaTareas({tareas, onDelete}) {
  const eliminar = (id) => {
    onDelete(id);
  }

  const listItems = tareas.slice().reverse().map((t) => 
    (<Item key={t.id} name={t.name} onDelete={() => eliminar(t.id)}/>)
  );

  return (
    <div>
      {listItems}
    </div>
    )
    
}
