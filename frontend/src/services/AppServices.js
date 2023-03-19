import axios from 'axios';

const endPoint = 'http://localhost:8080';

export const addOrder = formValues => axios.post(`${endPoint}/orders/create`, formValues);
export const getOrder = () => axios.get(`${endPoint}/orders/getall`);
