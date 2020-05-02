import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './date.scss';

const DateFormated = (props) => {
  const date = new Date(props.children[1]);
  return (
    <div className="date">
      <span className="date__icon">
        <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
      </span>
      { `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` }
    </div>
  );
};

export default DateFormated;
