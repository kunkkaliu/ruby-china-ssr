import "babel-polyfill";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import routes from './routes';
import configureStore from './store/configureStore';
import ASSETS from '../dist/assets.json';
const STATIC_PREFIX = "/";

function renderFullPage(renderedContent, initialState) {
    return `<!doctype html>
  <html>
    <head>
      <title>再见孙悟空</title>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1"> 
      <link rel="stylesheet" href="${STATIC_PREFIX}${ASSETS.main.css}"/>
    </head>
    <body>
      <div id="root">${renderedContent}</div>
      <script>
        window.INITIAL_STATE = ${JSON.stringify(initialState)};
      </script>
      <script src="${STATIC_PREFIX}${ASSETS.common.js}"></script>
      <script src="${STATIC_PREFIX}${ASSETS.main.js}"></script>
    </body>
  </html>`;
}

module.exports = (req, res) => {
    console.log("===================Begin==================");
    console.log(req.url);
    console.log("===================End==================");
    const store = configureStore();
    const context = {};
    const branch = matchRoutes(routes, req.url);
    let promises = [];
    branch.forEach(({route, match}) => {
        const onEnter = route.component.onEnter;
        const type = match && match.params && match.params.name;
        if(onEnter instanceof Function) {
            promises = promises.concat(onEnter(store, type));
        } else {
            promises = promises.concat(Promise.resolve(null))
        }
    });
    Promise.all(promises).then(() => {
        const rootComp = <Provider store={store}><StaticRouter location={req.url} context={context}>{renderRoutes(routes)}</StaticRouter></Provider>;
        res.status(200).send(renderFullPage(renderToString(rootComp), store.getState()));
    });
};