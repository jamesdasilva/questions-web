import React from 'react';
import { Link } from 'react-router-dom';

import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';
import AmountOfComments from '../_shared/amount-of-comments';

import { useQuestion } from '../_context/questions';

import './question.scss';

const Question = (props) => {
  const { q } = props;
  const { likeQuestion } = useQuestion();
  const likeClickHandler = () => {
    likeQuestion({
      id: q._id,
      text: props.children,
      likesCount: q.likesCount
    });
  }
  return (
    <section className="question">
      <p className="question__content">
        { props.children }
      </p>
      <div className="question__info-actions">
        <div className="question__info-actions__left-box">
          <Author> { q.user } </Author>
          <DateFormated>{ q.creationDate }</DateFormated>
          <ToLike click={ likeClickHandler }>{ q.likesCount }</ToLike>
          <AmountOfComments id={ q._id }>{ q.answers.length }</AmountOfComments>
        </div>
        <Link to={`/${ q._id }/answers`} className="question__answer">responder</Link>
      </div>
    </section>
  );
};

export default Question;
