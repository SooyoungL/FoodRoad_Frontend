import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Main from './pages/FoodRoad';
import Map from './pages/MapPage';

const Router = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/map" component={Map}/>
        </Switch>
      </div>
    )
}

export default Router