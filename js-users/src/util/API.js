import axios from 'axios';

const BASE_URL = 'http://js-assessment-backend.herokuapp.com/';

const instance = axios.create({
    baseURL: BASE_URL
});

export const fetchUsers = () => instance
    .get(BASE_URL + 'users.json');

export const toggleStatus = (userId, status) => instance
    .put(`${BASE_URL}users/${userId}.json`, {status});

export const addUser = user => instance
    .post(`${BASE_URL}users.json`, user);

export const updateUser = user => {
    const {id, ...fields} = user;
    return instance
        .put(`${BASE_URL}users/${id}.json`, {...fields});
};

export const fetchUser = userId => instance
    .get(`${BASE_URL}users/${userId}.json`);