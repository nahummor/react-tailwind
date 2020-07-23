import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';
import TestComponent1 from '../TestComponent1/TestComponent1';
import Table from '../Table/Table';
import TableWithPagination from '../Table/TableWithPagination';
import OrdersTable from '../Table/OrdersTable';

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
         <Route exact path='/ordersTable' component={OrdersTable} />
      </Switch>
   );
};

export default AppRoutes;
