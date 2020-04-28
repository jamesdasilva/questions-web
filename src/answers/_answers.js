import React from 'react';

import ToReply from './to-reply';
import Answer from './answer';
import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';

import './_answers.scss';

const Answers = () => {
  return (
    <div className="answers">
      <p className="answers__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in enim justo. Ut mauris risus, cursus dictum suscipit sit amet, dictum id magna. Nulla molestie fringilla turpis, non venenatis augue dignissim id.
      </p>
      <div className="answers__info">
        <Author >teste</Author>
        <DateFormated>teste</DateFormated>
        <ToLike />
      </div>
      <ToReply />
      <Answer />
      <Answer />
      <Answer />
    </div>
  );
};

export default Answers;
