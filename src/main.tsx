import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { App } from './app';
/* HashRouter only since I'm planning on a one page static. */

ReactDOM.render(
  <React.StrictMode>
    <HashRouter 
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
    }}>
      <App/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById( 'root' ),
);