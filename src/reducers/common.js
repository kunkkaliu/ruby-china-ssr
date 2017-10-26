/**
 * Created by liudonghui on 17/9/8.
 */
import {
    GETTOPICS_SUCCESS,
    GETTOPIC_PENDING,
    GETTOPIC_SUCCESS,
    GETREPLIES_PENDING,
    GETREPLIES_SUCCESS,
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
        case GETTOPIC_PENDING:
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    topic: {},
                },
            });
        case GETTOPIC_SUCCESS:
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    topic: action.payload.data.topic,
                },
            });
        case GETREPLIES_PENDING:
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    replies: [],
                },
            });
        case GETREPLIES_SUCCESS:
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    replies: action.payload.data.replies,
                },
            });
        default:
            return state;
    }
}
