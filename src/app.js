import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Shell from './shell/shell';

import './app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
};

export default App;
