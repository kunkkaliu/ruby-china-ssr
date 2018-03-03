import 'babel-polyfill';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import Root from './containers/Root';
import './assets/style/bootstrap.less';
import './index.less';

if (module.hot) {
    render(
        <AppContainer>
            <Root
                store={ store }
            />
        </AppContainer>,
        document.getElementById('root'),
    );
    module.hot.accept('./containers/Root', () => {
        render(
            <AppContainer>
                <Root
                    store={ store }
                />
            </AppContainer>,
            document.getElementById('root'),
        );
    });
} else {
    hydrate(
        <AppContainer>
            <Root
                store={ store }
            />
        </AppContainer>,
        document.getElementById('root'),
    );
}
