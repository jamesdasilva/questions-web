import React, { createContext, useContext, useState, useEffect } from 'react';

import { getQuestions, postQuestion, putQuestion } from '../_api/questions-api';

export const QuestionsContext = createContext();

export default function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [numberTotalOfquestions, setNumberTotalOfquestions] = useState(0);
  const [sortKey, setSortKey] = useState('mais recentes');
  const [queryText, setQueryText] = useState('');
  const [page, setPage] = useState(1);

  const keys = { };
  keys['mais recentes'] = 'creationDate';
  keys['mais populares'] = 'likesCount';

  useEffect(() => {
    console.log('useEffects ----');
    getQuestions(queryText, keys[sortKey], 5, page).then(data => {
      setNumberTotalOfquestions(data.data.length);
      setQuestions(data.data.data);
    });
  }, [queryText, sortKey, page]);

  const setSearch = (term) => {
    setQueryText(term);
    setPage(1);
  }

  const createNewQuestion = (questionText) => {
    postQuestion(questionText, 'user teste').then(res => {
      getQuestions(queryText, keys[sortKey], 5, page).then(data => {
        setNumberTotalOfquestions(data.data.length);
        setQuestions(data.data.data);
        setSortKey('mais recentes');
        setPage(1);
        setQueryText('');
      });
    });
  }

  const likeQuestion = (q) => {
    putQuestion(q.id, q.text, q.likesCount + 1).then(res => {
      getQuestions(queryText, keys[sortKey], 5, page).then(data => {
        setNumberTotalOfquestions(data.data.length);
        setQuestions(data.data.data);
      });
    });
  }

  return (
    <QuestionsContext.Provider 
      value={{
        questions, 
        setQuestions,
        numberTotalOfquestions,
        setNumberTotalOfquestions,
        sortKey,
        setSortKey,
        queryText,
        setQueryText,
        page,
        setPage,
        setSearch,
        createNewQuestion,
        likeQuestion
      }}>{ children }</QuestionsContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionsContext);
  return context;
}

export function useSearch() {
  const context = useContext(QuestionsContext);
  const { setSearch, queryText } = context;
  return { setSearch, queryText };
}

export function useQuestion() {
  const context = useContext(QuestionsContext);
  const { createNewQuestion, likeQuestion } = context;
  return { createNewQuestion, likeQuestion };
}