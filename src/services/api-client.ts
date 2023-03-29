import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '73aedbe87c764832a918b76a51eafaed',
  },
});
