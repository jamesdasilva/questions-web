import axios from 'axios';

const URI = 'http://localhost:9000/';

export const getQuestions = (query, sortKey, limit, page) => {
  const params = [
    query ? `q=${query}` : false,
    limit ? `_limit=${limit}` : false,
    page ? `_page=${page}` : false,
    sortKey ? `_sort=${sortKey}` : false,
    '_order=desc'
  ];
  const queryString = params.filter(item => item).reduce((pre, curr) => pre + '&' + curr);
  return axios.get(`${URI}api/questions${queryString ? '?' + queryString : '' }`);
}

export const getQuestion = (id) => {
  return axios.get(`${URI}api/questions/${id}`).then(resp => resp.data)
}

export const postQuestion = (text, user) => {
  return axios.post(`${URI}api/questions`, { text, user } );
}

export const putQuestion = (id, text, likesCount) => {
  return axios.put(`${URI}api/questions/${id}`, { text, likesCount } );
}

export const postAnswer = (questionId, user, text) => {
  return axios.post(`${URI}api/questions/${questionId}/answers`, { user, text } );
}

export const putAnswer = (questionId, answerId, text, likesCount) => {
  return axios.put(`${URI}api/questions/${questionId}/answers/${answerId}`, { text, likesCount } );
}