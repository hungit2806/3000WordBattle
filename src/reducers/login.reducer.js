import {
    LOADING_USER_INFO,
    LOADING_USER_INFO_FULFILLED,
    LOADING_USER_INFO_FAILED,

    LOADING_USER_INFO_STORAGE,
    LOADING_USER_INFO_STORAGE_FULFILLED,
    LOADING_USER_INFO_STORAGE_FAILED,

    RESET_LOADING,
    RESET_LOADING_STORAGE,
} from "../actions/login.actions";
const initialState = {
    userInfo: [],
    loadingUser: false,
    userInfoStorage: '',
    loadingUserInfoStorage: false,
    error: '',
    failed: false,
};
export default function loadUserInfoReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_USER_INFO:
            return Object.assign({}, state, {
                userInfo: [],
                loadingUser: false,
                error: '',
                failed: false
            });
        case LOADING_USER_INFO_FULFILLED:
            return Object.assign({}, state, {
                userInfo: action.userInfo,
                loadingUser: true,
            });
        case LOADING_USER_INFO_FAILED:
            return Object.assign({}, state, {
                loadingUser: true,
                failed: true
            });
        case LOADING_USER_INFO_STORAGE:
            return Object.assign({}, state, {
                userInfoStorage: '',
                loadingUserInfoStorage: false,
            });
        case LOADING_USER_INFO_STORAGE_FULFILLED:
            return Object.assign({}, state, {
                userInfoStorage: action.userInfoStorage.toString(),
                loadingUserInfoStorage: true,
            });
        case LOADING_USER_INFO_STORAGE_FAILED:
            return Object.assign({}, state, {
                loadingUserInfoStorage: true,
                failed: true
            });
        case RESET_LOADING_STORAGE:
            return Object.assign({}, state, {
                loadingUserInfoStorage: false,
            });
        case RESET_LOADING:
            return Object.assign({}, state, {
                loadingUser: false,
            });
        default:
            return state;
    }
}