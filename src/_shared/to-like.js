import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './to-like.scss';

const ToLike = (props) => {
  return (
    <div className="to-like" onClick={ props.click }>
      <span className="to-like__icon">
        <FontAwesomeIcon icon={ faThumbsUp } size="1x" />
      </span>
      { props.children }
    </div>
  );
};

export default ToLike;
