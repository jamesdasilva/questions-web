import React from 'react';

import Question from './question';
import ToAsk from './to-ask';
import ToSearch from './to-search';
import ToPaginate from './to-paginate';
import ToSort from './to-sort';

import { useQuestions } from '../_context/questions';

import './_questions.scss';

const Questions = () => {
  const { questions, 
    numberTotalOfquestions,
    sortKey,
    setSortKey,
    page,
    setPage
  } = useQuestions();

  return (
    <div className="questions">
      <ToAsk />
      <ToSort currentKey={sortKey} onSelect={ setSortKey }  />
      <ToSearch />
      {
        questions.map(
            (q) => <Question 
            key={ q._id } 
            q={ q }>{ q.text }</Question>
        )
      }
      <ToPaginate
        currentPage={ page }
        quantityPerPage= { 5 }
        totalAmount={ numberTotalOfquestions }
        onPage={ setPage } />
    </div>
  );
};

export default Questions;
