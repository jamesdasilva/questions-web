import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './questions-page.scss';

const QuestionsPage = () => {
  return (
    <div className="questions-page">
      <div className="header">
        <div className="header__container">
          <div className="header__title"><FontAwesomeIcon icon={faCoffee} size="xs" /> Answer!</div>
        </div>
      </div>
      <div className="content">
        <div className="content__container">
          Teste
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
