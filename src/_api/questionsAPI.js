import axios from 'axios';

const getQuestions = () => axios.get('http://localhost:3000/questions');

export default getQuestions;