import axios from 'axios';

//Api de Produtos2
export const api = axios.create({
    baseURL: 'https://basic-api-contact.herokuapp.com/contacts'
})