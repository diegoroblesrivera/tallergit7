import React, { useState, useMemo } from 'react';
import { useSalesData } from './hooks/useSalesData';
import { MetricsGrid } from './components/MetricsGrid';
import { SalesChart } from './components/SalesChart';
import { TransactionsTable } from './components/TransactionsTable';



  // 2. Custom Hook para manejar la carga de datos de la API
  const { data, loading, error, refetch } = useSalesData(dateRange);

  // 3. Datos filtrados localmente (Memorizados para rendimiento)
  const filteredTransactions = useMemo(() => {
    if (!data?.transactions) return [];
    return data.transactions.filter(t => 
      t.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data?.transactions, searchTerm]);

  // Manejo de estados de carga y error globales
  if (loading) return <div className="spinner">Cargando panel...</div>;
  if (error) return <div className="error">Error al cargar datos. <button onClick={refetch}>Reintentar</button></div>;

  return (
    <div className="dashboard-container p-6">
      {/* Encabezado y Filtros Globales */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard de Ventas</h1>
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Buscar cliente..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded"
          />
          {/* Aquí irían selectores de fecha */}
        </div>
      </header>

      {/* Grid de Métricas (Componente aislado) */}
      <MetricsGrid metrics={data?.summary} />

      {/* Sección Central: Gráficos y Visualizaciones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <SalesChart chartData={data?.chartData} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Resumen de Categorías</h3>
          {/* Otro componente pequeño o lista */}
        </div>
      </div>

      {/* Sección Inferior: Datos detallados */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-4">Historial de Transacciones</h3>
        <TransactionsTable transactions={filteredTransactions} />
      </div>
    </div>
  );

