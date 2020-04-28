import React from 'react';

import ToLike from '../shared/to-like';
import Date from '../shared/date';
import Author from '../shared/author';

import './answer.scss';

const Answer = () => {
  return (
    <section className="answer">
      <p className="answer__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in enim justo. Ut mauris risus, cursus dictum suscipit sit amet, dictum id magna. Nulla molestie fringilla turpis, non venenatis augue dignissim id.
      </p>
      <div className="answer__info">
          <Author />
          <Date />
          <ToLike />
      </div>
    </section>
  );
};

export default Answer;
