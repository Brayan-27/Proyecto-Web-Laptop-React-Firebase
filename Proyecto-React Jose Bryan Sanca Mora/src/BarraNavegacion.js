import React from "react";
import { Link } from "react-router-dom";

function BarraNavegacion() {
  return (
    <nav className="bg-slate-900 p-5 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <img src={process.env.PUBLIC_URL + '/icono.jpg'} alt="Logo" className="h-10 mr-4" />
        <ul className="flex space-x-4 text-white font-bold">
          <li>
            <Link to="/" className="hover:text-yellow-300">Inicio</Link>
          </li>
          <li>
            <Link to="/registros" className="hover:text-yellow-300">Registro</Link>
          </li>
          <li>
            <Link to="/productos" className="hover:text-yellow-300">Productos</Link>
          </li>
          <li>
            <Link to="/contactos" className="hover:text-yellow-300">Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BarraNavegacion;