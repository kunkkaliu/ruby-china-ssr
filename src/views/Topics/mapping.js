/**
 * Created by liudonghui on 17/9/13.
 */
import { bindActionCreators } from 'redux';
import { getTopics } from '../../actions/common';

export default {
    mapStateToProps: state => ({
        topics: state.common.results.topics,
    }),
    mapDispatchToProps: dispatch => ({
        getTopics: bindActionCreators(getTopics, dispatch),
    }),
};
