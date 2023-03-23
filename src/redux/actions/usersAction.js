import CNST from '../../constants/';

export const getUsersAction = () => ({
    type: CNST.USERS.GET_USERS.FETCH,
});

export const createUserAction = payload => ({
    type: CNST.USERS.CREATE_USER.FETCH,
    payload,
});

export const deleteUserAction = payload => ({
    type: CNST.USERS.DELETE_USER.FETCH,
    payload,
});

export const updateUserAction = payload => ({
    type: CNST.USERS.UPDATE_USER.FETCH,
    payload,
});

export const openModalFormAction = () => ({
    type: CNST.USERS.CREATE_USER.MODAL_FORM.OPEN,
});

export const closeModalFormAction = () => ({
    type: CNST.USERS.CREATE_USER.MODAL_FORM.CLOSE,
});

export const sortUsersAction = payload => ({
    type: CNST.USERS.SORT_USERS_IN_STORE,
    payload,
});
