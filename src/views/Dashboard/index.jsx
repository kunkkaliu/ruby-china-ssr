import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mapToProps from './mapping';
import Excellent from '../../components/Excellent/index.jsx';
import { getTopics } from '../../actions/common';
import './index.less';

@connect(mapToProps.mapStateToProps, mapToProps.mapDispatchToProps)
class Dashboard extends React.Component {
    static onEnter(store) {
        const { promise } = store.dispatch(getTopics({
            type: 'excellent',
        })).payload;
        return [promise];
    }

    // componentDidMount() {
    //     this.props.getTopics({
    //         type: 'excellent',
    //     });
    // }

    render() {
        console.log('Dashboard');
        return (
            <div className='home-wrap'>
                <div className='panel panel-default hidden-xs hidden-sm'>
                    <div className='panel-body home-center'>
                        <div className="media">
                            <a className="media-left" href="#">
                                <img className='img-width-50' src='https://twemoji.b0.upaiyun.com/2/svg/1f381.svg' role="presentation" />
                            </a>
                            <div className="media-body text-center">
                                <div>
                                    Ruby China 官方
                                    <a href='https://gems.ruby-china.org' rel='noopener noreferrer' target='_blank'>RubyGems 镜像</a>
                                    、
                                    Ruby 镜像 正式上线!
                                </div>
                                <p>
                                    <code>gem source -a https://gems.ruby-china.org</code>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row hidden-sm hidden-xs'>
                    <div className='col-md-6'>
                        <div className="thumbnail">
                            <img className='margin-30' src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" alt="v2ex.png" />
                            <div className="caption box-top-line">
                                <a href='https://github.com/kunkkaliu' rel='noopener noreferrer' target='_blank'>
                                    <div>
                                        GitHub
                                        <span className='glyphicon glyphicon-arrow-right pull-right'></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className="thumbnail">
                            <img className='margin-30' src="https://twemoji.b0.upaiyun.com/2/svg/1f381.svg" alt="v2ex.png" />
                            <div className="caption box-top-line">
                                <Link to='/topics?type=excellent'>
                                    <div>
                                        精华文章
                                        <span className='glyphicon glyphicon-arrow-right pull-right'></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Excellent topics={this.props.topics}/>
            </div>
        );
    }
}

Dashboard.propTypes = {
    getTopics: PropTypes.func,
    topics: PropTypes.array,
};

export default Dashboard;
export { Dashboard as DashboardTest };
