import React from 'react';

function Saludo(props) {
  const nombre = "Mundo";
  
  return (
    <div className="contenedor">
      <h1>¡Hola, {nombre}!</h1>
      <p>Esto es una vista simple en JSX.</p>
    </div>
  );
}

export default Saludo;
