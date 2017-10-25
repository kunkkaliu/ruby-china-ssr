import { combineReducers } from 'redux';
import load from './load';
import common from './common';

const rootReducer = combineReducers({
    load,
    common,
});

export default rootReducer;
