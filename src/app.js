import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

import QuestionsProvider from './_context/questions';

import Shell from './_shell/shell';

import './app.scss';

const App = () => {
  return (
    <QuestionsProvider>
      <BrowserRouter history={customHistory} >
        <Shell />
      </BrowserRouter>
    </QuestionsProvider>
  );
};

export default App;
