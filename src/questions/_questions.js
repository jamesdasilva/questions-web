import React, { useState, useEffect } from 'react';
import Question from './question';
import ToAsk from './to-ask';
import ToSearch from './to-search';
import ToPaginate from './to-paginate';
import ToSort from './to-sort';

import { getQuestions, postQuestion, putQuestion } from '../_api/questions-api';

import './_questions.scss';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [numberTotalOfquestions, setNumberTotalOfquestions] = useState(0);
  const [sortKey, setSortKey] = useState('data de criação');
  const [queryText, setQueryText] = useState('');
  const [page, setPage] = useState(1);

  const keys = { };
  keys['data de criação'] = 'creationDate';
  keys['número de curtidas'] = 'likesCount';

  useEffect(() => {
    getQuestions(queryText, keys[sortKey], 5, page).then(data => {
      setNumberTotalOfquestions(data.data.length);
      setQuestions(data.data.data);
    });
  }, [queryText, sortKey, page]);

  const searchChangeHandler = (e) => {
    setQueryText(e);
    setPage(1);
  }

  const submitHandler = (questionText) => {
    postQuestion(questionText, 'user teste').then(res => {
      getQuestions(queryText, keys[sortKey], 5, page).then(data => {
        setNumberTotalOfquestions(data.data.length);
        setQuestions(data.data.data);
      });
    });
  }

  const likeHandler = (q) => {
    putQuestion(q.id, q.text, q.likesCount).then(res => {
      getQuestions(queryText, keys[sortKey], 5, page).then(data => {
        setNumberTotalOfquestions(data.data.length);
        setQuestions(data.data.data);
      });
    });
  }

  return (
    <div className="questions">
      <ToAsk submit={ submitHandler } />
      <ToSort currentKey={sortKey} onSelect={ setSortKey }  />
      <ToSearch
        change={ searchChangeHandler }>
        { queryText }
      </ToSearch>
      {
        questions.map(
            (q) => <Question 
            key={ q._id } 
            q={ q }
            onLike={ likeHandler }>{ q.text }</Question>
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
