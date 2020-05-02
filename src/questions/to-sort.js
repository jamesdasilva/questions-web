import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './to-sort.scss';

const ToSort = (props) => {
  
  return (
    <div className="to-sort">
      ordenar por:
      <div className="to-sort__key to-sort__key--active">
        <span><FontAwesomeIcon icon={faCalendarAlt} size="1x" /></span> 
        data de criação</div>
      <div className="to-sort__key">número de curtidas</div>
    </div>
  );
};

export default ToSort;
