import axios from 'axios';

const getQuestions = (query, limit, page) => {

  const params = [
    query ? `q=${query}` : false,
    limit ? `_limit=${limit}` : false,
    limit ? `_page=${page}` : false
  ];

  const queryString = params.filter(item => item).reduce((pre, curr) => pre + '&' + curr);

  return axios.get(`http://localhost:3000/questions${queryString ? '?' + queryString : '' }`);
}

export default getQuestions;
