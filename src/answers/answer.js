import React from 'react';

import ToLike from '../_shared/to-like';
import DateFormated from '../_shared/date';
import Author from '../_shared/author';

import './answer.scss';

const Answer = () => {
  return (
    <section className="answer">
      <p className="answer__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in enim justo. Ut mauris risus, cursus dictum suscipit sit amet, dictum id magna. Nulla molestie fringilla turpis, non venenatis augue dignissim id.
      </p>
      <div className="answer__info">
        <Author />
        <DateFormated>teste</DateFormated>
        <ToLike />
      </div>
    </section>
  );
};

export default Answer;
