import React from 'react';

import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';

import './question.scss';

const Question = (props) => {
  return (
    <section className="question">
      <p className="question__content">
        { props.children }
      </p>
      <div className="question__info-actions">
        <div className="question__info-actions__left-box">
          <Author> { props.author } </Author>
          <DateFormated> { props.date } </DateFormated>
          <ToLike />
        </div>
        <button className="question__answer">responder</button>
      </div>
    </section>
  );
};

export default Question;
