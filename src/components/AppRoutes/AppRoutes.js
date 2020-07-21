import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';
import TestComponent1 from '../TestComponent1/TestComponent1';
import Table from '../Table/Table';
import TableWithPagination from '../Table/TableWithPagination';

const AppRoutes = () => {
   return (
      <Switch>
         <Route exact path='/' component={MainComponent} />
         <Route exact path='/test1' component={TestComponent1} />
         <Route exact path='/table' component={Table} />
         <Route
            exact
            path='/tableWithPagination'
            component={TableWithPagination}
         />
      </Switch>
   );
};

export default AppRoutes;
