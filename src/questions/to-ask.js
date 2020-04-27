import React from 'react';

import './to-ask.scss';

const ToAsk = () => {
  return (
    <form className="to-ask">
      <div className="to-ask__form-row">
        <textarea 
          className="to-ask__input-ask"
          placeholder="Escreva uma pergunta..."
          rows="1"></textarea>
        <input className="to-ask__submit-btn" type="submit" value="Parguntar" />
      </div>
      <div className="to-ask__form-row">
        
      </div>
    </form>
  );
};

export default ToAsk;
