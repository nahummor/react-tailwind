import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';
import TestComponent1 from '../TestComponent1/TestComponent1';

const AppRoutes = () => {
   return (
      <div>
         <Switch>
            <Route path='/' exact component={MainComponent} />
            <Route path='/test1' exact component={TestComponent1} />
            <Route path='/card2' exact component={MainComponent} />
         </Switch>
      </div>
   );
};

export default AppRoutes;
