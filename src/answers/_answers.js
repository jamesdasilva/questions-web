import React, { useEffect } from 'react';

import ToReply from './to-reply';
import Answer from './answer';
import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';

import { useQuestion } from '../_context/questions';

import './_answers.scss';

const Answers = (props) => {
  const { 
    setQuestionSelectId, 
    question, 
    answers, 
    likeQuestionAndRefreshQuestion } = useQuestion();

  useEffect(() => {
    setQuestionSelectId(props.match.params.id);
  }, []);

  const likeClickHandler = () => {
    likeQuestionAndRefreshQuestion(question);
  }

  return (
    <div className="answers">
      <p className="answers__content">
        { question.text }
      </p>
      <div className="answers__info">
        <Author >{ question.user }</Author>
        <DateFormated>{ question.creationDate }</DateFormated>
        <ToLike click={ likeClickHandler }>{ question.likesCount }</ToLike>
      </div>
      <ToReply />
      { answers && answers.map( answer => <Answer key={ answer._id } answer={answer} /> ) }
    </div>
  );
};

export default Answers;
