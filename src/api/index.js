import axios from 'axios';

const BASE_URL = 'https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7';

export const fetchPost = () => axios.get(BASE_URL);
