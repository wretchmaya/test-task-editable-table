import { takeLatest } from 'redux-saga/effects';
import CNST from '../../constants';
import {
    getUsers,
    deleteUser,
    deleteUserInStore,
    updateUser,
    updateUserInStore,
    createUser,
} from './users';

export default function* rootSaga() {
    yield takeLatest(CNST.USERS.GET_USERS.FETCH, getUsers);
    yield takeLatest(CNST.USERS.CREATE_USER.FETCH, createUser);
    yield takeLatest(CNST.USERS.DELETE_USER.FETCH, deleteUser);
    yield takeLatest(CNST.USERS.DELETE_USER_IN_STORE.FETCH, deleteUserInStore);
    yield takeLatest(CNST.USERS.UPDATE_USER.FETCH, updateUser);
    yield takeLatest(CNST.USERS.UPDATE_USER_IN_STORE.FETCH, updateUserInStore);
}
