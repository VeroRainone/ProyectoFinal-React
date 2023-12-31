import React from 'react';
import Item from './Item.jsx';
import { Link } from 'react-router-dom';
import "../App.css";

export default function ItemList({productos}) {

  return (
    <div>
      <ul className='item-list'>
        {productos.map((producto) => (
          <Link to={`/item/${producto.id}`} key={producto.id}>
            <Item producto={producto} />
          </Link>
        ))}
      </ul>
    </div>
  );
}
