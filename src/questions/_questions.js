import React, { useState, useEffect } from 'react';
import Question from './question';
import ToAsk from './to-ask';
import ToSearch from './to-search';

import getQuestions from '../_api/questionsAPI';

import './_questions.scss';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newSearch, setNewSearch] = useState('');

  useEffect(() => {
    getQuestions(newSearch, 10, 1).then(data => {
      setQuestions(data.data);
    });
  }, [newSearch]);

  const askChangeHandler = (e) => {
    setNewQuestion(e);
  }

  const searchChangeHandler = (e) => {
    setNewSearch(e);
  }

  return (
    <div className="questions">
      <ToAsk change={askChangeHandler}>{ newQuestion }</ToAsk>
      <ToSearch change={searchChangeHandler}>{ newSearch }</ToSearch>
      {
        questions.map(
          (q) => <Question 
            key={q.id} 
            id={q.id} 
            author={q.user} 
            date={q.creationDate}>{q.text}</Question>
        )
      }
      <button className="questions__load-more-btn">Carregar mais uma pergunta</button>
    </div>
  );
};

export default Questions;
