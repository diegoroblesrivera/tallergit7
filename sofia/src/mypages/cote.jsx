import React, { useState } from 'react';

function DashboardUsuario() {
  // 1. Estado del componente
  const [sesionIniciada, setSesionIniciada] = useState(true);
  const [nuevoItem, setNuevoItem] = useState('');
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender la sintaxis de JSX', completada: true },
    { id: 2, texto: 'Integrar componentes con props', completada: false },
    { id: 3, texto: 'Conectar una API externa', completada: false }
  ]);

  // 2. Manejadores de eventos (Handlers)
  const toggleSesion = () => setSesionIniciada(!sesionIniciada);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevoItem.trim()) return;
    
    setTareas([
      ...tareas,
      { id: Date.now(), texto: nuevoItem, completada: false }
    ]);
    setNuevoItem('');
  };

  // 3. Estilos en línea (Objetos JavaScript)
  const estilosContenedor = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '0 auto'
  };

  // 4. Renderizado Condicional con Retorno Temprano
  if (!sesionIniciada) {
    return (
      <div style={estilosContenedor}>
        <h2>Por favor, inicia sesión</h2>
        <button onClick={toggleSesion}>Iniciar Sesión</button>
      </div>
    );
  }

  // 5. Estructura JSX Principal
  return (
    <div style={estilosContenedor}>
      {/* Encabezado dinámico */}
      <header className="dashboard-header">
        <h1>Panel de Control</h1>
        <p>Estado: <strong>Usuario Activo</strong></p>
        <button onClick={toggleSesion}>Cerrar Sesión</button>
      </header>

      <hr />

      {/* Formulario con evento onSubmit */}
      <section className="seccion-formulario">
        <h3>Agregar Nueva Tarea</h3>
        <form onSubmit={agregarTarea}>
          <input 
            type="text" 
            placeholder="Ej. Estudiar Hooks..." 
            value={nuevoItem}
            onChange={(e) => setNuevoItem(e.target.value)}
          />
          <button type="submit">Añadir</button>
        </form>
      </section>

      {/* Renderizado de Listas usando .map() */}
      <section className="seccion-lista">
        <h3>Lista de Tareas ({tareas.length})</h3>
        {tareas.length === 0 ? (
          <p>No tienes tareas pendientes.</p>
        ) : (
          <ul>
            {tareas.map((tarea) => (
              <li 
                key={tarea.id} 
                style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
              >
                {tarea.texto} {tarea.completada && '✅'}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default DashboardUsuario;
