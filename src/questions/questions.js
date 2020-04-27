import React from 'react';
import Question from './question';
import ToAsk from './to-ask';
import ToSearch from './to-search';

import './questions.scss';

const Questions = () => {
  return (
    <div className="questions">
      <ToAsk />
      <ToSearch />
      <Question />
      <Question />
      <Question />
      <button className="questions__load-more-btn">Carregar mais uma pergunta</button>
    </div>
  );
};

export default Questions;
