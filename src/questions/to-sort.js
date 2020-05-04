import React from 'react';

import './to-sort.scss';

const ToSort = (props) => {
  const onClickHandler = (e) => {
    props.onSelect(e.target.textContent);
  }
  const setClassKey = (key) => {
    return `to-sort__key${key == props.currentKey ? ' to-sort__key--active' : ''}`;
  }
  return (
    <div className="to-sort">
      <div className={setClassKey('mais recentes')} onClick={onClickHandler}>
        mais recentes
      </div>
      <div className={setClassKey('mais populares')} onClick={onClickHandler}>
        mais populares
      </div>
    </div>
  );
};

export default ToSort;
