import axios from 'axios';

const BASE_URL = 'http://js-assessment-backend.herokuapp.com/';


export const fetchUsers = () => axios
    .get(BASE_URL + 'users.json');

export const toggleStatus = (userId, status) => axios
    .put(`${BASE_URL}users/${userId}.json`, {status});

export const addUser = user => axios
    .post(`${BASE_URL}users.json`, user);

export const updateUser = user => {
    const {id, ...fields} = user;
    return axios
        .put(`${BASE_URL}users/${id}.json`, {...fields});
};

export const fetchUser = userId => axios
    .get(`${BASE_URL}users/${userId}.json`);