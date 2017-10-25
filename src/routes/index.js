import App from '../views/App/index.jsx';
import Dashboard from '../views/Dashboard/index.jsx';
import Topics from '../views/Topics/index.jsx';
import Error from '../components/Error/index.jsx';

// 按需加载组件, 不过有问题, 依赖的ant - design的组件还是在每一个子模块中都加载了
// const Home = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../views/Home'))
//     }, 'home')
// };

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Dashboard,
            }, {
                path: '/topics',
                exact: true,
                component: Topics,
            }, {
                path: '/topics?type=:name',
                component: Topics,
            }, {
                path: '/*',
                component: Error,
            },
        ],
    },
];
export default routes;
