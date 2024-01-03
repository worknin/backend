import axios from 'axios';

const ApiService = {
  history: async (options) =>
    axios.request(options).then((response) => response.data),
  statistic: async (options) =>
    axios.request(options).then((response) => response.data),
  country: async (country) =>
    axios
      .get('https://restcountries.com/v3.1/name/' + country)
      .then((response) => response.data),
};

export default ApiService;
