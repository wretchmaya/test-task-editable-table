import { initialTableState } from '../stores/table';
import CNST from '../../constants';

export default function(state = initialTableState, action) {
    switch (action.type) {
        case CNST.USERS.GET_USERS.FETCH:
        case CNST.USERS.DELETE_USER.FETCH:
        case CNST.USERS.UPDATE_USER.FETCH:
        case CNST.USERS.CREATE_USER.FETCH:
            return {
                ...state,
                isLoading: true,
            };
        case CNST.USERS.GET_USERS.SUCCESS:
            return {
                ...state,
                users: [...action.payload],
                isLoading: false,
            };
        case CNST.USERS.CREATE_USER.SUCCESS:
            return {
                ...state,
                users: [...state.users, action.payload],
                isLoading: false,
                isModalOpened: false,
            };
        case CNST.USERS.GET_USERS.ERROR:
        case CNST.USERS.CREATE_USER.ERROR:
        case CNST.USERS.DELETE_USER.ERROR:
        case CNST.USERS.UPDATE_USER.ERROR:
            return {
                ...state,
                isLoading: false,
                isModalOpened: false,
                errors: action.payload.errors,
            };
        case CNST.USERS.DELETE_USER_IN_STORE.SUCCESS:
        case CNST.USERS.UPDATE_USER_IN_STORE.SUCCESS:
            return {
                ...state,
                users: [...action.payload],
                isLoading: false,
            };
        case CNST.USERS.CREATE_USER.MODAL_FORM.OPEN:
        case CNST.USERS.CREATE_USER.MODAL_FORM.CLOSE:
            return {
                ...state,
                isModalOpened: !state.isModalOpened,
            };
        case CNST.USERS.SORT_USERS_IN_STORE:
            return {
                ...state,
                users: [...action.payload],
            };

        default:
            return state;
    }
}
