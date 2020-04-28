import React from 'react';

import './to-reply.scss';

const ToReply = () => {
  return (
    <form className="to-reply">
      <div className="to-reply__form-row">
        <textarea 
          className="to-reply__input"
          placeholder="Escreva uma resposta..."
          rows="1"></textarea>
        <input className="to-reply__submit-btn" type="submit" value="Responder" />
      </div>
      <div className="to-reply__form-row">
        
      </div>
    </form>
  );
};

export default ToReply;
