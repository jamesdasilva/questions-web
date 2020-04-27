import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

import './question.scss';

const Question = () => {
  return (
    <section className="question">
      <p className="question__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in enim justo. Ut mauris risus, cursus dictum suscipit sit amet, dictum id magna. Nulla molestie fringilla turpis, non venenatis augue dignissim id.
      </p>
      <div className="question__info-actions">
        <div className="question__info-actions__left-box">
          <a className="question__go-to-answers">
            <span className="question__icon">
              <FontAwesomeIcon icon={faCommentDots} size="1x" />
            </span> 99 respostas
          </a>
          <h5 className="question__author">
            <span className="question__icon">
              <FontAwesomeIcon icon={faUser} size="1x" />
            </span>Test Author</h5>
        </div>
        <button className="question__answer">responder</button>
      </div>
    </section>
  );
};

export default Question;
