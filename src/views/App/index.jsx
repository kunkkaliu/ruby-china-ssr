import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes, matchRoutes } from 'react-router-config';
import Navbar from '../../components/Navbar/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import routes from '../../routes';
import './index.less';

class App extends React.PureComponent {
    componentWillReceiveProps(nextProps) {
        const { location } = this.props;
        const nextLocation = nextProps.location;
        if (nextLocation.pathname + nextLocation.search !== location.pathname + location.search) {
            const branch = matchRoutes(routes, nextLocation.pathname + nextLocation.search);
            branch.forEach(({ route, match }) => {
                const { onEnter } = route.component;
                const type = match && match.params && match.params.name;
                if (onEnter instanceof Function) {
                    onEnter(this.context.store, type);
                }
            });
        }
    }
    render() {
        console.log('App');
        const { location, route } = this.props;
        return (
            <div className="container">
                <Navbar path={ location.pathname }/>
                {renderRoutes(route.routes)}
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    route: PropTypes.object,
    nextLocation: PropTypes.object,
};

App.contextTypes = {
    store: PropTypes.object,
};

export default App;
export { App as AppTest };
