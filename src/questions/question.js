import React from 'react';
import { Link } from 'react-router-dom';

import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';
import AmountOfComments from '../_shared/amount-of-comments'

import './question.scss';

const Question = (props) => {
  const likeClickHandler = () => {
    props.onLike({
      id: props.id,
      text: props.children,
      user: props.author,
      creationDate: props.creationDate,
      likesCount: props.likesCount + 1
    });
  }
  return (
    <section className="question">
      <p className="question__content">
        { props.children }
      </p>
      <div className="question__info-actions">
        <div className="question__info-actions__left-box">
          <Author> { props.author } </Author>
          <DateFormated> { props.creationDate } </DateFormated>
          <ToLike click={ likeClickHandler }>{ props.likesCount }</ToLike>
          <AmountOfComments id={ props.id }>12</AmountOfComments>
        </div>
        <Link to={`/answers/${props.id}`} className="question__answer">responder</Link>
      </div>
    </section>
  );
};

export default Question;
