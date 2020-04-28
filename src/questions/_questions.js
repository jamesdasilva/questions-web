import React, { useState, useEffect } from 'react';
import Question from './question';
import ToAsk from './to-ask';
import ToSearch from './to-search';

import { Link } from 'react-router-dom';

import getQuestions from '../_api/questionsAPI';

import './_questions.scss';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions().then(data => {
      setQuestions(data.data);
    });
  }, []);
  return (
    <div className="questions">
      <Link to="/answers/12" >Ir para answers page</Link>
      <ToAsk />
      <ToSearch />
      {
        questions.map(
          (q) => <Question key={q.id} author={q.user} date={q.creationDate}>{q.text}</Question>
        )
      }
      <button className="questions__load-more-btn">Carregar mais uma pergunta</button>
    </div>
  );
};

export default Questions;
