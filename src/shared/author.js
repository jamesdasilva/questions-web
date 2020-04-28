import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './author.scss';

const Author = () => {
  return (
    <h5 className="author">
      <span className="author__icon">
        <FontAwesomeIcon icon={faUser} size="1x" />
      </span>Test Author
    </h5>
  );
};

export default Author;
