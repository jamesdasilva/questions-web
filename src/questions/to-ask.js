import React from 'react';

import './to-ask.scss';

const ToAsk = (props) => {
  return (
    <form className="to-ask">
      <div className="to-ask__form-row">
        <textarea 
          className="to-ask__input-ask"
          placeholder="Escreva uma pergunta..."
          onChange={(e) => props.change(e.target.value)}
          value={props.children}
          rows="1" />
        <input className="to-ask__submit-btn" type="submit" value="Parguntar" />
      </div>
    </form>
  );
};

export default ToAsk;
