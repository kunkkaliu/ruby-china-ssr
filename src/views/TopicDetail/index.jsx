/**
 * Created by liudonghui on 17/10/26.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mapToProps from './mapping';
import TopicInfo from '../../components/TopicInfo/index.jsx';
import Replies from '../../components/Replies/index.jsx';
import { getTopic, getReplies } from '../../actions/common';
import '../../assets/style/Markdown.less';

@connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
class TopicDetail extends React.Component {
    static onEnter(store, params) {
        const promise1 = store.dispatch(getTopic(params && params.id)).payload.promise;
        const promise2 = store.dispatch(getReplies(params && params.id)).payload.promise;
        return [promise1, promise2];
    }

    render() {
        const { topic, replies } = this.props;
        const isEmpty = !topic.title;
        return (
            <div className='topic-detail-wrap'>
                { !isEmpty &&
                <div className='panel panel-default topic-wrap'>
                    <div className='panel-heading media'>
                        <div className='media-body'>
                            <h4>{topic.title}</h4>
                            <TopicInfo topic={topic} isShow={true}></TopicInfo>
                        </div>
                        <a className="media-right" href="#">
                            <img className='img-circle img-width-50' src={topic.user.avatar_url} role='presentation'/>
                        </a>
                    </div>
                    <div className='panel-body markdown'>
                        <span dangerouslySetInnerHTML={{ __html: topic.body_html }} />
                    </div>
                    <div className='panel-footer'>
                    </div>
                </div>
                }
                { isEmpty && <h2>Loading...</h2> }
                <Replies replies={replies} />
            </div>
        );
    }
}

TopicDetail.propTypes = {
    getTopic: PropTypes.func,
    getReplies: PropTypes.func,
    match: PropTypes.object,
    topic: PropTypes.object,
    replies: PropTypes.array,
};

TopicDetail.contextTypes = {
    store: PropTypes.object,
};

export default TopicDetail;
