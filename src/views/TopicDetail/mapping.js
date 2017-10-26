/**
 * Created by liudonghui on 17/9/13.
 */
import { bindActionCreators } from 'redux';
import { getTopic, getReplies } from '../../actions/common';

export default {
    mapStateToProps: state => ({
        topic: state.common.results.topic,
        replies: state.common.results.replies,
    }),
    mapDispatchToProps: dispatch => ({
        getTopic: bindActionCreators(getTopic, dispatch),
        getReplies: bindActionCreators(getReplies, dispatch),
    }),
};
