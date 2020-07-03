import axios from 'axios';

const sendList = axios.create({
    // baseURL: "https://o7esg0iq8i.execute-api.us-east-1.amazonaws.com/prod"
})

const listCotacoes = axios.create({
    // baseURL: "https://ftuhyefhmj.execute-api.us-east-1.amazonaws.com/Prod"
})

export default (sendList,listCotacoes);



