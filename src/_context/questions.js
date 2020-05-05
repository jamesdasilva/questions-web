import React, { createContext, useContext, useState, useEffect } from 'react';

import { getQuestion, getQuestions, postQuestion, putQuestion, postAnswer, putAnswer } from '../_api/questions-api';

export const QuestionsContext = createContext();

export default function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [numberTotalOfquestions, setNumberTotalOfquestions] = useState(0);
  const [sortKey, setSortKey] = useState('mais recentes');
  const [queryText, setQueryText] = useState('');
  const [page, setPage] = useState(1);
  const [questionSelectId, setQuestionSelectId] = useState(undefined);
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState('');

  const keys = { };
  keys['mais recentes'] = 'creationDate';
  keys['mais populares'] = 'likesCount';

  const refreshQuestions = () => {
    getQuestions(queryText, keys[sortKey], 5, page).then(data => {
      setNumberTotalOfquestions(data.data.length);
      setQuestions(data.data.data);
    });
  }

  const refreshAnswers = () => {
    getQuestion(questionSelectId).then(resp => {
      setQuestion(resp.data);
      setAnswers(resp.data.answers)
    });
  }
  useEffect(() => {
    refreshQuestions();
  }, [queryText, sortKey, page]);

  useEffect(() => {
    refreshAnswers();
  }, [questionSelectId]);

  const setSearch = (term) => {
    setQueryText(term);
    setPage(1);
  }

  const createNewQuestion = (questionText) => {
    postQuestion(questionText, user).then(res => {
      setPage(1);
      setQueryText('');
      if(sortKey != 'mais recentes') {
        setSortKey('mais recentes');
      } else {
        refreshQuestions();
      }
    });
  }

  const createAnswer = (questionText) => {
    postAnswer(questionSelectId, user, questionText).then(res => {
      refreshAnswers();
    });
  }

  const likeAnswer = (q) => {
    putAnswer(questionSelectId, q._id, q.text, q.likesCount + 1).then(res => {
      refreshAnswers();
    });
  }

  const likeQuestionAndRefreshQuestion = (q) => {
    putQuestion(q._id, q.text, q.likesCount + 1).then(res => {
      refreshAnswers();
    });
  }

  const likeQuestion = (q) => {
    putQuestion(q.id, q.text, q.likesCount + 1).then(res => {
      refreshQuestions();
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
        likeQuestion,
        questionSelectId,
        setQuestionSelectId,
        question,
        setQuestion,
        answers, 
        setAnswers,
        createAnswer,
        likeAnswer,
        likeQuestionAndRefreshQuestion,
        user,
        setUser
      }}>{ children }</QuestionsContext.Provider>
  );
}

export function useUser() {
  const context = useContext(QuestionsContext);
  const { user, setUser } = context;
  return { user, setUser };
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
  const { createNewQuestion, likeQuestion, likeQuestionAndRefreshQuestion,
    setQuestionSelectId, createAnswer, question, answers, likeAnswer } = context;
  return { createNewQuestion, likeQuestion, likeQuestionAndRefreshQuestion,
    setQuestionSelectId, createAnswer, question, answers, likeAnswer };
}
