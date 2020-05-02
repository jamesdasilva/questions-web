import axios from 'axios';

export const getQuestions = (query, limit, page) => {

  const params = [
    query ? `q=${query}` : false,
    limit ? `_limit=${limit}` : false,
    page ? `_page=${page}` : false,
    '_sort=creationDate',
    '_order=DESC'
  ];

  const queryString = params.filter(item => item).reduce((pre, curr) => pre + '&' + curr);

  return axios.get(`http://localhost:3000/questions${queryString ? '?' + queryString : '' }`);
}

export const postQuestion = (text, user) => {
  const creationDate = new Date();
  return axios.post('http://localhost:3000/questions', { text, user, creationDate } );
}

