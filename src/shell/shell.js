import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCog } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route } from 'react-router-dom';

import Questions from '../questions/questions';
import Answers from '../answers/answers';

import './shell.scss';

const Shell = () => {
  return (
    <div className="shell">
      <div className="header">
        <div className="header__container">
          <div className="header__title">
            <FontAwesomeIcon icon={faCommentDots} size="1x" /> Answer!
          </div>
          <div className="header__config">
            <FontAwesomeIcon icon={faCog} size="1x" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__container">
          <Switch>
            <Route path="/" exact>
              <Questions />
            </Route>
            <Route path="/answers">
              <Answers />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Shell;
