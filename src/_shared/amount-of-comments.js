import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

import './amount-of-comments.scss';

const AmountOfComments = (props) => {
  return (
    <h5 className="amount-of-comments">
      <Link to={`/answers/${props.id}`}>
        <span className="amount-of-comments__icon">
          <FontAwesomeIcon icon={faCommentDots} size="1x" />
        </span> { props.children } Comments
      </Link>
    </h5>
  );
};

export default AmountOfComments;
