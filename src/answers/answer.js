import React from 'react';

import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';

import './answer.scss';

const Answer = (props) => {
  const likeClickHandler = () => {
    props.onLike({
      id: props.answer._id,
      text: props.answer.text,
      likesCount: props.answer.likesCount + 1
    });
  }
  return (
    <section className="answer">
      <p className="answer__content">
        { props.answer.text }
      </p>
      <div className="answer__info">
        <Author>{ props.answer.user }</Author>
        <DateFormated>{ props.answer.creationDate }</DateFormated>
        <ToLike click={ likeClickHandler }>{ props.answer.likesCount }</ToLike>
      </div>
    </section>
  );
};

export default Answer;
