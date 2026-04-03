import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Ventas</h1>
      <p>Aquí va tu formulario de registrar venta</p>
    </div>
  );
}

function Reportes() {
  return (
    <div>
      <h1>Reportes</h1>
      <p>Aquí va tu tabla de reportes</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Dashboard</Link> | <Link to="/reportes">Reportes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </div>
  );
}

export default App;