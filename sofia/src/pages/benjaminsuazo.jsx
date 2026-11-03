import React from 'react';

export default function MinimalProfile() {
  // Datos simulados (Model)
  const user = {
    name: "Elena Rostova",
    role: "Diseñadora de Interiores",
    bio: "Creando espacios donde el silencio y la luz son los protagonistas. Menos es siempre más.",
    projects: [
      { id: 1, title: "Casa Zen", year: "2025" },
      { id: 2, title: "Estudio Nórdico", year: "2026" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans antialiased flex justify-center items-center p-6">
      <main className="w-full max-w-md bg-white border border-[#eaeaea] rounded-xl p-8 shadow-sm">
        
        {/* Cabecera / Identidad */}
        <header className="mb-8 text-center">
          <div className="w-20 h-20 bg-[#f0f0f0] rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-light text-gray-400">
            {user.name.charAt(0)}
          </div>
          <h1 className="text-xl font-medium tracking-tight">{user.name}</h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{user.role}</p>
        </header>

        {/* Biografía */}
        <section className="mb-10 text-center">
          <p className="text-sm leading-relaxed text-gray-600 font-light">
            "{user.bio}"
          </p>
        </section>

        {/* Listado de Proyectos */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Proyectos recientes</h2>
          <div className="space-y-3">
            {user.projects.map((project) => (
              <div 
                key={project.id} 
                className="flex justify-between items-center py-3 px-4 rounded-lg bg-[#fdfdfd] border border-[#f0f0f0] hover:border-gray-300 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-sm font-medium">{project.title}</span>
                <span className="text-xs text-gray-400 font-mono">{project.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Botón de acción minimalista */}
        <footer className="mt-8">
          <button className="w-full py-2.5 bg-[#1a1a1a] text-white text-xs font-medium rounded-lg hover:bg-neutral-800 transition-colors tracking-wide">
            Conectar
          </button>
        </footer>

      </main>
    </div>
  );
}