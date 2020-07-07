import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainComponent from '../MainComponent/MainComponent';

const AppRoutes = () => {
   return (
      <div>
         <Switch>
            <Route path='/' exact component={MainComponent} />
            <Route path='/card1' exact component={MainComponent} />
            <Route path='/card2' exact component={MainComponent} />
         </Switch>
      </div>
   );
};

export default AppRoutes;
