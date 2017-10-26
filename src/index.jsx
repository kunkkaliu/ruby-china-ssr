import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import Root from './containers/Root';
import './assets/style/bootstrap.css';
import './index.less';

render(
    <AppContainer>
        <Root
            store={ store }
        />
    </AppContainer>,
    document.getElementById('root'),
);

if (module.hot) {
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
}
