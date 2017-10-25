/**
 * Created by liudonghui on 17/9/8.
 */
import {
    GETTOPICS_SUCCESS,
} from '../actions/common';

const initialState = {
    results: {
        replies: [],
        topics: [],
        topic: {},
    },
};


export default function dashboard(state = initialState, action = {}) {
    switch (action.type) {
        case GETTOPICS_SUCCESS:
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    topics: action.payload.data.topics,
                },
            });
        default:
            return state;
    }
}
