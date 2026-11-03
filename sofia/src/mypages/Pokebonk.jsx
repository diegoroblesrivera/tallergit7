import React from 'react';

// Definición de un componente funcional básico (la vista)
function VistaSimple() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Hola, Juegen pokebonk</h1>
      <a 
        href="https://pokebonk.com/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        link pokebonk
      </a>
    </div>
  );
}

export default VistaSimple;
