import axios from 'axios';

const endPoint = 'http://3.109.62.86:8080';
// const endPoint = 'http://localhost:8080';

export const addOrder = formValues => axios.post(`${endPoint}/orders/create`, formValues);
export const getOrder = () => axios.get(`${endPoint}/orders/getall`);
