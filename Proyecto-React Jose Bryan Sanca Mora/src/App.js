
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BarraNavegacion from './BarraNavegacion';
import Contactos from './Contactos';

import Productos from './Productos';
import Inicio from './Incio';
import Registros from './Registros';
import Footer from './Footer';



function App() {
  return (
     <div className='App'>
      <BarraNavegacion/>
      <Routes>
        <Route
          path='/' Component={Inicio}
        />
          <Route path='/registros' Component={Registros}/>
        <Route path='/contactos' Component={Contactos}/>
        <Route path='/productos' Component={Productos}/>
        
      </Routes>
      <div>
      <Footer />

      </div>
     </div>
  );
}

export default App;
