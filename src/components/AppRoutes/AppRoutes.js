import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';
import TestComponent1 from '../TestComponent1/TestComponent1';
import Table from '../Table/Table';

const AppRoutes = () => {
   return (
      <Switch>
         <Route path='/' exact component={MainComponent} />
         <Route path='/test1' exact component={TestComponent1} />
         <Route path='/table' exact component={Table} />
      </Switch>
   );
};

export default AppRoutes;
