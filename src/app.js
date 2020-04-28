import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

import Shell from './_shell/shell';

import './app.scss';

const App = () => {
  return (
    <BrowserRouter history={customHistory} >
      <Shell />
    </BrowserRouter>
  );
};

export default App;
