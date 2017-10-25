/**
 * Created by liudonghui on 17/1/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicInfo from '../TopicInfo/index.jsx';
import './index.less';

class Lists extends React.PureComponent {
    render() {
        const { topics } = this.props;
        const listItems = topics.map(topic =>
            (
                <div className="media topic" key={topic.id}>
                    <a className="media-left" href="#">
                        <img className='img-circle img-width-50' src={topic.user.avatar_url} role="presentation"/>
                    </a>
                    <div className="media-body">
                        <Link to={`/topics/${topic.id}`} className='title'>{topic.title}</Link>
                        {topic.excellent && <span className='glyphicon glyphicon-heart left' title='精华帖'></span>}
                        <TopicInfo topic={topic}></TopicInfo>
                    </div>
                    <div className='media-right count'>
                        <span className='badge'>{topic.replies_count}</span>
                    </div>
                </div>
            ));
        return (
            <div className='panel-body'>
                { listItems }
            </div>
        );
    }
}

Lists.propTypes = {
    topics: PropTypes.array,
};

export default Lists;
