/**
 * Created by liudonghui on 17/1/5.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Format } from '../../utils';

class TopicInfo extends React.PureComponent {
    render() {
        const { isShow, topic } = this.props;
        let info = '';
        let hits = '';
        if (isShow) {
            info = <span>发布于 { Format.date(topic.created_at) }</span>;
            hits = <span>{ topic.hits } 次阅读</span>;
        }

        return (
            <div className='infos'>
                <span className='separator'>{topic.node_name}</span>
                •
                <span className='separator'>{topic.user.name}</span>
                •

                { topic.replied_at !== null ?
                    <span className='separator'>
                        { info }
                        最后由
                        <span className='separator'>{topic.last_reply_user_login}</span>
                        回复于 {Format.date(topic.replied_at)}
                    </span>
                    :
                    <span className='separator'>发布于 { Format.date(topic.created_at) }</span>
                }
                { hits }
            </div>
        );
    }
}

TopicInfo.propTypes = {
    topic: PropTypes.object,
    isShow: PropTypes.bool,
};

export default TopicInfo;
