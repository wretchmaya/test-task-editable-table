import { call, put, select } from 'redux-saga/effects';
import { isResponseOk } from '../../helpers/isResponseOk';
import CNST from '../../constants';
import {
    getUsersRequest,
    createUserRequest,
    updateUserRequest,
    deleteUserRequest,
} from '../api/users';
import { removeFromLocalStorage } from '../../helpers/localStorageActions';

export function* getUsers() {
    try {
        const response = yield call(getUsersRequest);
        if (isResponseOk(response)) {
            yield put({
                type: CNST.USERS.GET_USERS.SUCCESS,
                payload: response.data,
            });
        }
    } catch (error) {
        yield put({
            type: CNST.USERS.GET_USERS.ERROR,
            payload: {
                errors: error,
            },
        });
    }
}

export function* createUser(props) {
    try {
        const response = yield call(createUserRequest, props.payload);
        if (isResponseOk(response)) {
            yield put({
                type: CNST.USERS.CREATE_USER.SUCCESS,
                payload: response.data,
            });
        }
    } catch (error) {
        yield put({
            type: CNST.USERS.CREATE_USER.ERROR,
            payload: {
                errors: error,
            },
        });
    }
}

export function* updateUser(props) {
    try {
        const response = yield call(updateUserRequest, props.payload);
        if (isResponseOk(response)) {
            yield put({
                type: CNST.USERS.UPDATE_USER_IN_STORE.FETCH,
                payload: response.data,
            });
            removeFromLocalStorage(response.data.id);
        }
    } catch (error) {
        yield put({
            type: CNST.USERS.UPDATE_USER.ERROR,
            payload: {
                errors: error,
            },
        });
    }
}

export function* updateUserInStore(props) {
    const {
        tableReducer: { users },
    } = yield select();
    const updatedUser = props.payload;
    const newUsers = users.map(user => (user.id === updatedUser.id ? updatedUser : user));
    yield put({
        type: CNST.USERS.UPDATE_USER_IN_STORE.SUCCESS,
        payload: newUsers,
    });
}

export function* deleteUser(props) {
    try {
        const response = yield call(deleteUserRequest, props.payload);
        if (isResponseOk(response)) {
            yield put({
                type: CNST.USERS.DELETE_USER_IN_STORE.FETCH,
                payload: response.data,
            });
            removeFromLocalStorage(response.data.id);
        }
    } catch (error) {
        yield put({
            type: CNST.USERS.DELETE_USER.ERROR,
            payload: {
                errors: error,
            },
        });
    }
}

export function* deleteUserInStore(props) {
    const {
        tableReducer: { users },
    } = yield select();
    const newUsers = users.filter(user => user.id !== props.payload.id);
    yield put({
        type: CNST.USERS.DELETE_USER_IN_STORE.SUCCESS,
        payload: newUsers,
    });
}
