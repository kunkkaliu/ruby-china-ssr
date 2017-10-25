/**
 * Created by liudonghui on 17/10/25.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { NavLink } from 'react-router-dom';
import './index.less';

class Navbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            topics: false,
            jobs: false,
            remote: false,
        };
    }

    componentDidMount() {
        this.handleClick(this.props.path);
    }

    toggleDropdown = () => {
        this.setState({ hide: !this.state.hide });
    }

    handleClick = (name) => {
        switch (name) {
            case '/topics':
                this.setState({
                    topics: true,
                    jobs: false,
                    remote: false,
                    hide: true,
                });
                break;
            case '/jobs':
                this.setState({
                    topics: false,
                    jobs: true,
                    remote: false,
                    hide: true,
                });
                break;
            case '/remote':
                this.setState({
                    topics: false,
                    jobs: false,
                    remote: true,
                    hide: true,
                });
                break;
            default:
                this.setState({
                    topics: false,
                    jobs: false,
                    remote: false,
                    hide: true,
                });
        }
    }

    render() {
        return (
            <div className='header'>
                <nav className="navbar navbar-default navbar-fixed-sm" role="navigation">
                    <div className="container">
                        <div className="navbar-header" id='navbar-header'>
                            <button type="button" onClick={ this.toggleDropdown } className="bs-navbar-collapse navbar-toggle collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink to='/' activeClassName="navbar-brand" onClick={ () => this.handleClick('/') }>
                                <b className='text-danger'>Ruby</b> China
                            </NavLink>
                        </div>

                        <div className={classname('navbar-collapse', { hide: this.state.hide })} id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={classname({ active: this.state.topics })}>
                                    <NavLink to="/topics" onClick={ () => this.handleClick('/topics') }>社区</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Navbar.propTypes = {
    path: PropTypes.string,
};

export default Navbar;
