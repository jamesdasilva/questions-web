import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './date.scss';

const Date = () => {
  return (
    <div className="date">
      <span className="date__icon">
        <FontAwesomeIcon icon={faCalendarAlt} size="1x" />
      </span>
      11/11/1111
    </div>
  );
};

export default Date;
