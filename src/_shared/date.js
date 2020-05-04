import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './date.scss';

const DateFormated = (props) => {
  const date = new Date(props.children);
  return (
    <div className="date">
      <span className="date__icon">
        <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
      </span>
      { `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}` }
    </div>
  );
};

export default DateFormated;
