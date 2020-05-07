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

  const onSelectHandler = (e) => {
    setPage(1);
    setSortKey(e);
  }

  return (
    <div className="questions">
      <ToAsk />
      <ToSort currentKey={sortKey} onSelect={ onSelectHandler }  />
      <ToSearch />
      { questions && questions.length > 0 ?
        questions.map(
            (q) => <Question 
            key={ q._id } 
            q={ q }>{ q.text }</Question>
        ) : <div className="answers__empty">seja o primeiro a responder</div>
      }
      { numberTotalOfquestions > 5 && <ToPaginate
        currentPage={ page }
        quantityPerPage= { 5 }
        totalAmount={ numberTotalOfquestions }
        onPage={ setPage } /> }
    </div>
  );
};

export default Questions;
