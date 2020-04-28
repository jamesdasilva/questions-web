import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './to-like.scss';

const ToLike = () => {
  return (
    <div className="to-like">
      <span className="to-like__icon">
        <FontAwesomeIcon icon={faThumbsUp} size="1x" />
      </span>
      11
    </div>
  );
};

export default ToLike;
