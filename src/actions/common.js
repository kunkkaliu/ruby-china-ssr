/**
 * Created by liudonghui on 17/9/8.
 */
import api from '../api/index';

export const GETTOPICS = 'common/reducer/GETTOPICS';
export const GETTOPICS_SUCCESS = 'common/reducer/GETTOPICS_SUCCESS';

export const GETTOPIC = 'common/reducer/GETTOPIC';
export const GETTOPIC_PENDING = 'common/reducer/GETTOPIC_PENDING';
export const GETTOPIC_SUCCESS = 'common/reducer/GETTOPIC_SUCCESS';

export const GETREPLIES = 'common/reducer/GETREPLIES';
export const GETREPLIES_PENDING = 'common/reducer/GETREPLIES_PENDING';
export const GETREPLIES_SUCCESS = 'common/reducer/GETREPLIES_SUCCESS';

export function getTopics(options) {
    return {
        type: GETTOPICS,
        payload: {
            promise: api.get('/topics', {
                params: {
                    node_id: (options && options.node_id) || '',
                    limit: (options && options.limit) || 20,
                    type: (options && options.type) || 'last_actived',
                    offset: (options && options.offset) || 0,
                },
            }),
        },
    };
}

export function getTopic(id) {
    return {
        type: GETTOPIC,
        payload: {
            promise: api.get(`/topics/${id}`, {
                params: {
                    id,
                },
            }),
        },
    };
}

export function getReplies(id) {
    return {
        type: GETREPLIES,
        payload: {
            promise: api.get(`/topics/${id}/replies`, {
                params: {
                    id,
                },
            }),
        },
    };
}
