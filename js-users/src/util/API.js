import axios from 'axios';

const BASE_URL = 'http://js-assessment-backend.herokuapp.com/';
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export const fetchUsers = () => axiosInstance
    .get(BASE_URL + 'users.json');

export const toggleStatus = (userId, status) => axiosInstance
    .put(`${BASE_URL}users/${userId}.json`, {status});