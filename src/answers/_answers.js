import React, { useState, useEffect } from 'react';

import ToReply from './to-reply';
import Answer from './answer';
import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';

import { getQuestion, postAnswer, putQuestion, putAnswer } from '../_api/questions-api';

import './_answers.scss';

const Answers = (props) => {
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getQuestion(props.match.params.id).then(resp => {
      setQuestion(resp.data);
      setAnswers(resp.data.answers)
    });
  }, [ ]);

  const submitHandler = (questionText) => {
    postAnswer(props.match.params.id, 'user teste', questionText).then(res => {
      getQuestion(props.match.params.id).then(resp => {
        setQuestion(resp.data);
        setAnswers(resp.data.answers);
      });
    });
  }

  const likeHandler = (q) => {
    putAnswer(props.match.params.id, q.id, q.text, q.likesCount).then(res => {
      getQuestion(props.match.params.id).then(resp => {
        setQuestion(resp.data);
        setAnswers(resp.data.answers);
      });
    });
  }

  const likeClickHandler = () => {
    putQuestion(question._id, question.text, question.likesCount + 1).then(res => {
      getQuestion(props.match.params.id).then(resp => {
        setQuestion(resp.data);
        setAnswers(resp.data.answers);
      });
    });
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
      <ToReply submit={ submitHandler } />
      { answers && answers.map( answer => <Answer key={ answer._id } onLike={ likeHandler } answer={answer} /> ) }
    </div>
  );
};

export default Answers;
