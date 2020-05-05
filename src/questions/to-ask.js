import React, { useState } from 'react';

import { useQuestion } from '../_context/questions';

import './to-ask.scss';

const ToAsk = () => {
  const [questionText, setQuestionText] = useState('');
  const { createNewQuestion } = useQuestion();
  
  const submit = (e) => {
    e.preventDefault();
    createNewQuestion(questionText);
    setQuestionText('');
  }
  return (
    <form className="to-ask">
      <textarea 
        className="to-ask__input-ask"
        placeholder="Escreva uma pergunta..."
        onChange={ (e) => setQuestionText(e.target.value) }
        value={ questionText }
        rows="1" />
      <button 
        className="to-ask__submit-btn"
        onClick={ submit }>perguntar</button>
    </form>
  );
};

export default ToAsk;
