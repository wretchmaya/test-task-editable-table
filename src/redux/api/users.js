import axios from 'axios';

export const getUsersRequest = () => {
    return axios.get(`https://64188df575be53f451e261ab.mockapi.io/users`).catch(error => {
        throw error.response.data;
    });
};

export const createUserRequest = data => {
    return axios
        .post(`https://64188df575be53f451e261ab.mockapi.io/users`, data)
        .catch(error => {
            console.log(error);
        });
};

export const updateUserRequest = data => {
    return axios
        .put(`https://64188df575be53f451e261ab.mockapi.io/users/${data.id}`, data)
        .catch(error => {
            throw error.response.data;
        });
};

export const deleteUserRequest = id => {
    return axios
        .delete(`https://64188df575be53f451e261ab.mockapi.io/users/${id}`)
        .catch(error => {
            throw error.response.data;
        });
};
