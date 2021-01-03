import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.coinranking.com/v1/public/'
});
