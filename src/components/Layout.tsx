import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <div className="navigation-bar">
        <input 
          type="text" 
          className="nav-input" 
          value="/pagina-principal" 
          readOnly
        />
      </div>
      
      <div className="content-area">
        {/* Aquí se renderizará el componente de la ruta activa */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;