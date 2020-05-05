import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCog } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route } from 'react-router-dom';

import Questions from '../questions/_questions';
import Answers from '../answers/_answers';

import QuestionsProvider from '../_context/questions';

import './shell.scss';

const Shell = () => {
  return (
    <div className="shell">
      <div className="header">
        <div className="header__container">
          <div className="header__title">
            <FontAwesomeIcon icon={faCommentDots} size="1x" /> Questions!
          </div>
          <div className="header__config">
            <FontAwesomeIcon icon={faCog} size="1x" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__container">
          <QuestionsProvider>
            <Switch>
              <Route exact path="/" component={Questions} />
              <Route exact path="/:id/answers" component={Answers} />
            </Switch>
          </QuestionsProvider>
        </div>
      </div>
    </div>
  );
};

export default Shell;
