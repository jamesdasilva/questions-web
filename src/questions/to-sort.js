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
      ordenar por:
      <div className={setClassKey('data de criação')} onClick={onClickHandler}>
        data de criação
      </div>
      <div className={setClassKey('número de curtidas')} onClick={onClickHandler}>
        número de curtidas
      </div>
    </div>
  );
};

export default ToSort;
