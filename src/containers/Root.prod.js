import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

class Root extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <Router>
                    {renderRoutes(routes)}
                </Router>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object,
};

export default Root;
