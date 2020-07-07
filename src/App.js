import React from 'react';

import './styles/app.css';

import AppRoutes from './components/AppRoutes/AppRoutes';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
   return (
      <div className='flex flex-col'>
         <Toolbar />
         <AppRoutes />
      </div>
   );
}

export default App;
