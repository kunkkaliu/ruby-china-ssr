/**
 * Created by liudonghui on 17/10/25.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mapToProps from './mapping';
import Paginate from '../../components/Paginate/index.jsx';
import Lists from '../../components/Lists/index.jsx';
import { getTopics } from '../../actions/common';
import './index.less';

@connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
class Topics extends React.Component {
    constructor(props) {
        super(props);
        this.uid = 1;
        this.state = {
            type: 'last_actived',
        };
    }

    static onEnter(store, params) {
        const { promise } = store.dispatch(getTopics({
            type: (params && params.name) || 'last_actived',
        })).payload;
        return [promise];
    }

    // componentDidMount() {
    //     const { location } = this.props;
    //     this.props.getTopics({
    //         type: (location && location.query && location.query.type) || this.state.type,
    //     });
    // }

    handleClick = (type) => {
        this.uid = this.uid + 1;
        this.setState({
            type,
        });
    };

    render() {
        const { topics } = this.props;
        return (
            <div className='panel panel-default topic-lists'>
                <div className='panel-heading text-right'>
                    <span className='separator light-gray-color'>查看:</span>
                    <Link to='/topics?type=last_actived' onClick={() => this.handleClick('last_actived')}>默认</Link>
                    <span className='separator'>/</span>
                    <span className='glyphicon glyphicon-heart right' title='精华帖'></span>
                    <Link to='/topics?type=excellent' onClick={() => this.handleClick('excellent')}>优质帖子</Link>
                    <span className='separator'>/</span>
                    <Link to='/topics?type=no_reply' onClick={() => this.handleClick('no_reply')}>无人问津</Link>
                    <span className='separator'>/</span>
                    <Link to='/topics?type=recent' onClick={() => this.handleClick('recent')}>最新创建</Link>
                </div>
                <Lists topics={topics} />
                <Paginate key={this.uid}
                    options={{ type: this.state.type }}
                    pageCount={20}
                    perPage={20}
                    getTopics={this.props.getTopics} />
            </div>
        );
    }
}

Topics.propTypes = {
    getTopics: PropTypes.func,
    location: PropTypes.object,
    topics: PropTypes.array,
};

export default Topics;
