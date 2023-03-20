import axios from 'axios';

// const endPoint = 'https://pie-chart-demo.onrender.com';
const endPoint = 'http://localhost:8080';

export const addOrder = formValues => axios.post(`${endPoint}/orders/create`, formValues);
export const getOrder = () => axios.get(`${endPoint}/orders/getall`);
