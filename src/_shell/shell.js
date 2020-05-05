import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route } from 'react-router-dom';

import { useUser } from '../_context/questions';

import Questions from '../questions/_questions';
import Answers from '../answers/_answers';

import './shell.scss';

const Shell = () => {
  const { user, setUser } = useUser();
  return (
    <div className="shell">
      <div className="header">
        <div className="header__container">
          <div className="header__title">
            <FontAwesomeIcon icon={faCommentDots} size="1x" /> Questions!
          </div>
          <div className="header__config">
            <FontAwesomeIcon icon={faUser} size="1x" />
            <input 
              type="text" 
              onChange={ (e) => setUser(e.target.value) }
              value={ user }
              placeholder="Identifique-se" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__container">
          <Switch>
            <Route exact path="/" component={Questions} />
            <Route exact path="/:id/answers" component={Answers} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Shell;
