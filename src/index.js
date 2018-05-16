import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import React from 'react';
import App from './js/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert/dist/sweetalert.css';
import './js/assets/css/material-dashboard-react.css';
import 'react-web-tabs/dist/react-web-tabs.css';


render(
  <AppContainer><App /></AppContainer>,
  document.getElementById('root')
);

if (module && module.hot) {
  module.hot.accept('./js/App', () => {
    const NewApp = require('./js/App').default;
    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
