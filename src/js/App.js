import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { rehydrate, hotRehydrate } from "rfx-core";
import '../scss/app';
import indexRoutes from './routes/index.jsx';

import stores from './stores'

const store = rehydrate();

export default class App extends Component {

  render() {
    return (
      <Router>
          <Provider store={store}>
            <div>
              <Switch>
                  {
                      indexRoutes.map((prop,key) => {
                          return (
                              <Route path={prop.path} component={prop.component}  key={key}/>
                              
                          );
                      })
                  }
              </Switch>
            </div>
          </Provider>
      </Router>
    );
  }
  
}