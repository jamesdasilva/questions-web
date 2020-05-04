import React, { useState } from 'react';

import './to-reply.scss';

const ToReply = (props) => {
  const [answerText, setAnswerText] = useState('');
  const submit = (e) => {
    e.preventDefault();
    props.submit(answerText);
    setAnswerText('');
  }
  return (
    <form className="to-reply">
      <textarea 
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
