/**
 * Created by liudonghui on 17/9/8.
 */
import api from '../api/index';

export const GETTOPICS = 'topics/reducer/GETTOPICS';
export const GETTOPICS_SUCCESS = 'topics/reducer/GETTOPICS_SUCCESS';

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
