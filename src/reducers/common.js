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
import { getSmallAvatar } from '../utils';

const initialState = {
    results: {
        replies: [],
        topics: [],
        topic: {},
    },
};


export default function dashboard(state = initialState, action = {}) {
    let topics;
    let topic;
    let replies;
    switch (action.type) {
        case GETTOPICS_SUCCESS:
            topics = action.payload.data.topics || [];
            topics.forEach((item) => {
                const { user } = item;
                if (user.avatar_url) {
                    user.avatar_url = getSmallAvatar(user.avatar_url);
                }
            });
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    topics,
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
            topic = action.payload.data.topic || {};
            if (topic.user && topic.user.avatar_url) {
                topic.user.avatar_url = getSmallAvatar(topic.user.avatar_url);
            }
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    topic,
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
            replies = action.payload.data.replies || [];
            replies.forEach((item) => {
                const { user } = item;
                if (user.avatar_url) {
                    user.avatar_url = getSmallAvatar(user.avatar_url);
                }
            });
            return Object.assign({}, state, {
                results: {
                    ...state.results,
                    replies,
                },
            });
        default:
            return state;
    }
}
