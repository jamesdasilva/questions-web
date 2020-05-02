import React, { useState, useEffect } from 'react';
import Question from './question';
import ToAsk from './to-ask';
import ToSearch from './to-search';
import ToPaginate from './to-paginate';
import ToSort from './to-sort';

import { getQuestions, postQuestion } from '../_api/questions-api';

import './_questions.scss';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [numberTotalOfquestions, setNumberTotalOfquestions] = useState(0);
  const [queryText, setQueryText] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getQuestions(queryText, 5, page).then(data => {
      setNumberTotalOfquestions(data.headers['x-total-count']);
      setQuestions(data.data);
    });
  }, [queryText, page]);

  const searchChangeHandler = (e) => {
    setQueryText(e);
    setPage(1);
  }

  const submitHandler = (questionText) => {
    postQuestion(questionText, 'user teste').then(res => console.log('res ', res));
  }

  return (
    <div className="questions">
      <ToAsk submit={ submitHandler } />
      <ToSort />
      <ToSearch
        change={ searchChangeHandler }>
        { queryText }
      </ToSearch>
      {
        questions.map(
          (q) => <Question 
            key={ q.id } 
            id={ q.id } 
            author={ q.user } 
            date={ q.creationDate }>{ q.text }</Question>
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
