import React from "react";



const List = ({ items = [], toggle, remove,}) => (
  <ul>
    {items.map(({ title, done }) => (
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        <span onClick={() => toggle(title)}>{title}</span>
        <button onClick={() => remove(title)}>Usuń</button>
        <button>Usuń po 2 sec</button>
        
      </li>
    ))}
  </ul>
);

export default List;
