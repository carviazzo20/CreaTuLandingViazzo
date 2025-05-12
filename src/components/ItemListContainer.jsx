import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <section style={{ width: '100%', textAlign: 'center' }}>
      <h2>{greeting}</h2>
    </section>
  );
}

export default ItemListContainer;
