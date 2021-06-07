import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    BiggiesCount: counterReducer,
    isLogged: loggedReducer,
});

export default allReducers;