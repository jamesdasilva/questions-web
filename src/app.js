import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import QuestionsPage from './pages/questions-page/questions-page';
import AnswerPage from './pages/answer-page/answer-page';

import './app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <QuestionsPage />
        </Route>
        <Route path="/answers">
          <AnswerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
