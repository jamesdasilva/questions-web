import React, { useState } from 'react';

import { useQuestion } from '../_context/questions';

import './to-reply.scss';

const ToReply = () => {
  const [answerText, setAnswerText] = useState('');
  const { createAnswer } = useQuestion();
  const submit = (e) => {
    e.preventDefault();
    if(answerText){
      createAnswer(answerText);
      setAnswerText('');
    }
  }
  return (
    <form className="to-reply">
      <textarea 
        data-testid="toReply"
        className="to-reply__input"
        placeholder="Escreva uma resposta..."
        onChange={ (e) => setAnswerText(e.target.value) }
        value={ answerText }
        rows="1"></textarea>
      <button 
        className="to-reply__submit-btn"
        onClick={ submit }>responder</button>
    </form>
  );
};

export default ToReply;
