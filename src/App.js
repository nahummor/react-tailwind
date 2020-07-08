import React from 'react';

import './styles/app.css';

import AppRoutes from './components/AppRoutes/AppRoutes';
import Toolbar from './components/UI/Toolbar/Toolbar';

function App() {
   console.log('App start...');

   return (
      <div className='flex flex-col'>
         <Toolbar />
         <AppRoutes />
      </div>
   );
}

export default App;
