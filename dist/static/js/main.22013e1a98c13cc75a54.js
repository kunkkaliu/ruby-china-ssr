webpackJsonp([0],{0:function(e,t,a){e.exports=a(1)},1:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=a(2),n=r(s),i=a(8),u=a(18),o=a(23),l=r(o),c=a(182),d=r(c);a(294),a(295),(0,i.render)(n.default.createElement(u.AppContainer,null,n.default.createElement(d.default,{store:l.default})),document.getElementById("root"));(function(){"undefined"==typeof __REACT_HOT_LOADER__})()},23:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(24),n=r(s),i=(0,n.default)(window.INITIAL_STATE||{}),u=i;t.default=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"store","/Users/liudonghui/workspace/react/ruby-china-ssr/src/store/index.js"),__REACT_HOT_LOADER__.register(u,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/store/index.js"))})();e.exports=t.default},24:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=void 0;return t=_(d.default,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var n=a(25),i=a(46),u=r(i),o=a(47),l=r(o),c=a(130),d=r(c),_=(0,n.applyMiddleware)(u.default,(0,l.default)({promiseTypeSuffixes:["PENDING","SUCCESS","ERROR"]}))(n.createStore);(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"createStoreWithMiddleware","/Users/liudonghui/workspace/react/ruby-china-ssr/src/store/configureStore.js"),__REACT_HOT_LOADER__.register(s,"configureStore","/Users/liudonghui/workspace/react/ruby-china-ssr/src/store/configureStore.js"))})();e.exports=t.default},47:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.promiseTypeSuffixes||c;return function(e){var a=e.dispatch;return function(e){return function(r){if(!(0,l.isPromise)(r.payload))return e(r);var s=r.type,n=r.payload,u=r.meta,c=n.promise,d=n.data,_=(u||{}).promiseTypeSuffixes||t,f=(0,o.default)(_,3),p=f[0],E=f[1],m=f[2];e((0,i.default)({type:s+"_"+p},d?{payload:d}:{},u?{meta:u}:{}));var h=function(e){return e&&(e.meta||e.payload)},T=function(e){return"function"==typeof e},g=function(e){return(0,i.default)({type:s+"_"+(e?m:E)},u?{meta:u}:{},e?{error:!0}:{})};return r.payload.promise=c.then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=g();return a(T(e)?e.bind(null,t):(0,i.default)({},t,h(e)?e:(0,i.default)({},!!e&&{payload:e})))},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=g(!0);return a(T(e)?e.bind(null,t):(0,i.default)({},t,h(e)?e:(0,i.default)({},!!e&&{payload:e})))}),r}}}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(48),i=r(n),u=a(86),o=r(u);t.default=s;var l=a(112),c=["PENDING","FULFILLED","REJECTED"];(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"defaultTypes","/Users/liudonghui/workspace/react/ruby-china-ssr/src/middlewares/promiseMiddleware.js"),__REACT_HOT_LOADER__.register(s,"promiseMiddleware","/Users/liudonghui/workspace/react/ruby-china-ssr/src/middlewares/promiseMiddleware.js"))})();e.exports=t.default},112:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){return null!==e&&"object"===("undefined"==typeof e?"undefined":(0,o.default)(e))&&(e.promise&&"function"==typeof e.promise.then)}function n(e){var t=";  "+document.cookie,a=t.split("; "+e+"="),r=2;return a.length===r?a.pop().split(";").shift():null}function i(e,t){return e+t}Object.defineProperty(t,"__esModule",{value:!0}),t.Format=void 0;var u=a(113),o=r(u);t.isPromise=s,t.getCookie=n;var l={};l.date=function(e){var t=new Date(e),a=(Date.now()-Number(t))/1e3;return a<3600?i((a/60).toFixed(0)," 分钟前"):a<86400?i((a/3600).toFixed(0)," 小时前"):i((a/86400).toFixed(0)," 天前")},t.Format=l;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"isPromise","/Users/liudonghui/workspace/react/ruby-china-ssr/src/utils/index.js"),__REACT_HOT_LOADER__.register(n,"getCookie","/Users/liudonghui/workspace/react/ruby-china-ssr/src/utils/index.js"),__REACT_HOT_LOADER__.register(i,"pluralize","/Users/liudonghui/workspace/react/ruby-china-ssr/src/utils/index.js"),__REACT_HOT_LOADER__.register(l,"Format","/Users/liudonghui/workspace/react/ruby-china-ssr/src/utils/index.js"))})()},130:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(25),n=a(131),i=r(n),u=a(133),o=r(u),l=(0,s.combineReducers)({load:i.default,common:o.default}),c=l;t.default=c;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"rootReducer","/Users/liudonghui/workspace/react/ruby-china-ssr/src/reducers/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/reducers/index.js"))})();e.exports=t.default},131:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case u.ADDHTTPLOAD:return(0,i.default)({},e,{httpLength:e.httpLength+1});case u.DELHTTPLOAD:return(0,i.default)({},e,{httpLength:e.httpLength-1});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(49),i=r(n);t.default=s;var u=a(132),o={httpLength:0};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"initialState","/Users/liudonghui/workspace/react/ruby-china-ssr/src/reducers/load.js"),__REACT_HOT_LOADER__.register(s,"load","/Users/liudonghui/workspace/react/ruby-china-ssr/src/reducers/load.js"))})();e.exports=t.default},132:function(e,t){"use strict";function a(){return{type:s}}function r(){return{type:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.addHttpLoadLength=a,t.delHttpLoadLength=r;var s=t.ADDHTTPLOAD="load/reducer/ADDHTTPLOAD",n=t.DELHTTPLOAD="load/reducer/DELHTTPLOAD";(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"ADDHTTPLOAD","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/load.js"),__REACT_HOT_LOADER__.register(n,"DELHTTPLOAD","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/load.js"),__REACT_HOT_LOADER__.register(a,"addHttpLoadLength","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/load.js"),__REACT_HOT_LOADER__.register(r,"delHttpLoadLength","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/load.js"))})()},133:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case l.GETTOPICS_SUCCESS:return(0,o.default)({},e,{results:(0,i.default)({},e.results,{topics:t.payload.data.topics})});case l.GETTOPIC_PENDING:return(0,o.default)({},e,{results:(0,i.default)({},e.results,{topic:{}})});case l.GETTOPIC_SUCCESS:return(0,o.default)({},e,{results:(0,i.default)({},e.results,{topic:t.payload.data.topic})});case l.GETREPLIES_PENDING:return(0,o.default)({},e,{results:(0,i.default)({},e.results,{replies:[]})});case l.GETREPLIES_SUCCESS:return(0,o.default)({},e,{results:(0,i.default)({},e.results,{replies:t.payload.data.replies})});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(48),i=r(n),u=a(49),o=r(u);t.default=s;var l=a(134),c={results:{replies:[],topics:[],topic:{}}};(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"initialState","/Users/liudonghui/workspace/react/ruby-china-ssr/src/reducers/common.js"),__REACT_HOT_LOADER__.register(s,"dashboard","/Users/liudonghui/workspace/react/ruby-china-ssr/src/reducers/common.js"))})();e.exports=t.default},134:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){return{type:l,payload:{promise:o.default.get("/topics",{params:{node_id:e&&e.node_id||"",limit:e&&e.limit||20,type:e&&e.type||"last_actived",offset:e&&e.offset||0}})}}}function n(e){return{type:d,payload:{promise:o.default.get("/topics/"+e,{params:{id:e}})}}}function i(e){return{type:p,payload:{promise:o.default.get("/topics/"+e+"/replies",{params:{id:e}})}}}Object.defineProperty(t,"__esModule",{value:!0}),t.GETREPLIES_SUCCESS=t.GETREPLIES_PENDING=t.GETREPLIES=t.GETTOPIC_SUCCESS=t.GETTOPIC_PENDING=t.GETTOPIC=t.GETTOPICS_SUCCESS=t.GETTOPICS=void 0,t.getTopics=s,t.getTopic=n,t.getReplies=i;var u=a(135),o=r(u),l=t.GETTOPICS="common/reducer/GETTOPICS",c=t.GETTOPICS_SUCCESS="common/reducer/GETTOPICS_SUCCESS",d=t.GETTOPIC="common/reducer/GETTOPIC",_=t.GETTOPIC_PENDING="common/reducer/GETTOPIC_PENDING",f=t.GETTOPIC_SUCCESS="common/reducer/GETTOPIC_SUCCESS",p=t.GETREPLIES="common/reducer/GETREPLIES",E=t.GETREPLIES_PENDING="common/reducer/GETREPLIES_PENDING",m=t.GETREPLIES_SUCCESS="common/reducer/GETREPLIES_SUCCESS";(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"GETTOPICS","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(c,"GETTOPICS_SUCCESS","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(d,"GETTOPIC","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(_,"GETTOPIC_PENDING","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(f,"GETTOPIC_SUCCESS","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(p,"GETREPLIES","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(E,"GETREPLIES_PENDING","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(m,"GETREPLIES_SUCCESS","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(s,"getTopics","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(n,"getTopic","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"),__REACT_HOT_LOADER__.register(i,"getReplies","/Users/liudonghui/workspace/react/ruby-china-ssr/src/actions/common.js"))})()},135:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(136),n=r(s),i=a(155),u=r(i),o=[],l=u.default.CancelToken,c=function(e){for(var t=0;t<o.length;t+=1)o[t].u===e.url+"&"+e.method&&(o[t].f(),o.splice(t,1))},d=u.default.create({baseURL:"https://ruby-china.org/api/v3",headers:{Accept:"application/json"}});d.interceptors.request.use(function(e){return c(e),e.cancelToken=new l(function(t){o.push({u:e.url+"&"+e.method,f:t})}),e},function(e){return n.default.reject(e)}),d.interceptors.response.use(function(e){return c(e.config),{data:e.data}},function(e){return n.default.reject(e.response&&e.response.data)});var _=d;t.default=_;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"pending","/Users/liudonghui/workspace/react/ruby-china-ssr/src/api/index.js"),__REACT_HOT_LOADER__.register(l,"APICancelToken","/Users/liudonghui/workspace/react/ruby-china-ssr/src/api/index.js"),__REACT_HOT_LOADER__.register(c,"removePending","/Users/liudonghui/workspace/react/ruby-china-ssr/src/api/index.js"),__REACT_HOT_LOADER__.register(d,"normalAxios","/Users/liudonghui/workspace/react/ruby-china-ssr/src/api/index.js"),__REACT_HOT_LOADER__.register(_,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/api/index.js"))})();e.exports=t.default},182:function(e,t,a){"use strict";e.exports=a(183);(function(){"undefined"==typeof __REACT_HOT_LOADER__})()},183:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(205),g=a(222),O=a(258),y=a(261),R=r(y),A=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.store;return E.default.createElement(T.Provider,{store:e},E.default.createElement(g.BrowserRouter,null,(0,O.renderRoutes)(R.default)))}}]),t}(E.default.Component);A.propTypes={store:h.default.object};var v=A;t.default=v;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(A,"Root","/Users/liudonghui/workspace/react/ruby-china-ssr/src/containers/Root.prod.js"),__REACT_HOT_LOADER__.register(v,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/containers/Root.prod.js"))})();e.exports=t.default},261:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(262),n=r(s),i=a(269),u=r(i),o=a(276),l=r(o),c=a(286),d=r(c),_=a(292),f=r(_),p=[{component:n.default,routes:[{path:"/",exact:!0,component:u.default},{path:"/topics",exact:!0,component:l.default},{path:"/topics?type=:name",component:l.default},{path:"/topics/:id",component:d.default},{path:"/*",component:f.default}]}],E=p;t.default=E;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"routes","/Users/liudonghui/workspace/react/ruby-china-ssr/src/routes/index.js"),__REACT_HOT_LOADER__.register(E,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/routes/index.js"))})();e.exports=t.default},262:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AppTest=void 0;var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(258),g=a(263),O=r(g),y=a(266),R=r(y),A=a(261),v=r(A);a(268);var C=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,a=this.props.location,r=e.location;if(r.pathname+r.search!==a.pathname+a.search){var s=(0,T.matchRoutes)(v.default,r.pathname+r.search);s.forEach(function(e){var a=e.route,r=e.match,s=a.component.onEnter;s instanceof Function&&s(t.context.store,r&&r.params)})}}},{key:"render",value:function(){var e=this.props,t=e.location,a=e.route;return E.default.createElement("div",{className:"container"},E.default.createElement(O.default,{path:t.pathname}),(0,T.renderRoutes)(a.routes),E.default.createElement(R.default,null))}}]),t}(E.default.PureComponent);C.propTypes={children:h.default.node,location:h.default.object,route:h.default.object,nextLocation:h.default.object},C.contextTypes={store:h.default.object};var b=C;t.default=b,t.AppTest=C;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(C,"App","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/App/index.jsx"),__REACT_HOT_LOADER__.register(b,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/App/index.jsx"))})()},263:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(264),g=r(T),O=a(222);a(265);var y=function(e){function t(e){(0,u.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.toggleDropdown=function(){return a.__toggleDropdown__REACT_HOT_LOADER__.apply(a,arguments)},a.handleClick=function(){return a.__handleClick__REACT_HOT_LOADER__.apply(a,arguments)},a.state={hide:!1,topics:!1,jobs:!1,remote:!1},a}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.handleClick(this.props.path)}},{key:"__toggleDropdown__REACT_HOT_LOADER__",value:function(){return this.__toggleDropdown__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__toggleDropdown__REACT_HOT_LOADER__",value:function(){this.setState({hide:!this.state.hide})}},{key:"__handleClick__REACT_HOT_LOADER__",value:function(){return this.__handleClick__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleClick__REACT_HOT_LOADER__",value:function(e){switch(e){case"/topics":this.setState({topics:!0,jobs:!1,remote:!1,hide:!0});break;case"/jobs":this.setState({topics:!1,jobs:!0,remote:!1,hide:!0});break;case"/remote":this.setState({topics:!1,jobs:!1,remote:!0,hide:!0});break;default:this.setState({topics:!1,jobs:!1,remote:!1,hide:!0})}}},{key:"render",value:function(){var e=this;return E.default.createElement("div",{className:"header"},E.default.createElement("nav",{className:"navbar navbar-default navbar-fixed-sm",role:"navigation"},E.default.createElement("div",{className:"container"},E.default.createElement("div",{className:"navbar-header",id:"navbar-header"},E.default.createElement("button",{type:"button",onClick:this.toggleDropdown,className:"bs-navbar-collapse navbar-toggle collapsed"},E.default.createElement("span",{className:"sr-only"},"Toggle navigation"),E.default.createElement("span",{className:"icon-bar"}),E.default.createElement("span",{className:"icon-bar"}),E.default.createElement("span",{className:"icon-bar"})),E.default.createElement(O.NavLink,{to:"/",activeClassName:"navbar-brand",onClick:function(){return e.handleClick("/")}},E.default.createElement("b",{className:"text-danger"},"Ruby")," China")),E.default.createElement("div",{className:(0,g.default)("navbar-collapse",{hide:this.state.hide}),id:"bs-example-navbar-collapse-1"},E.default.createElement("ul",{className:"nav navbar-nav"},E.default.createElement("li",{className:(0,g.default)({active:this.state.topics})},E.default.createElement(O.NavLink,{to:"/topics",onClick:function(){return e.handleClick("/topics")}},"社区")))))))}}]),t}(E.default.PureComponent);y.propTypes={path:h.default.string};var R=y;t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"Navbar","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Navbar/index.jsx"),__REACT_HOT_LOADER__.register(R,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Navbar/index.jsx"))})();e.exports=t.default},265:function(e,t){},266:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),n=r(s);a(267);var i=function(){return n.default.createElement("div",{className:"footer container"},n.default.createElement("span",{className:"license"},"Designed by",n.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kunkkaliu/react-redux-bootstrap"},"  kunkkaliu"),"© 2017"))},u=i;t.default=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"Footer","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Footer/index.jsx"),__REACT_HOT_LOADER__.register(u,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Footer/index.jsx"))})();e.exports=t.default},267:265,268:265,269:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.DashboardTest=void 0;var s,n,i=a(184),u=r(i),o=a(188),l=r(o),c=a(189),d=r(c),_=a(193),f=r(_),p=a(194),E=r(p),m=a(2),h=r(m),T=a(205),g=a(202),O=r(g),y=a(222),R=a(270),A=r(R),v=a(271),C=r(v),b=a(134);a(275);var D=(s=(0,T.connect)(A.default.mapStateToProps,A.default.mapDispatchToProps),s(n=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return h.default.createElement("div",{className:"home-wrap"},h.default.createElement("div",{className:"panel panel-default hidden-xs hidden-sm"},h.default.createElement("div",{className:"panel-body home-center"},h.default.createElement("div",{className:"media"},h.default.createElement("a",{className:"media-left",href:"#"},h.default.createElement("img",{className:"img-width-50",src:"https://twemoji.b0.upaiyun.com/2/svg/1f381.svg",role:"presentation"})),h.default.createElement("div",{className:"media-body text-center"},h.default.createElement("div",null,"Ruby China 官方",h.default.createElement("a",{href:"https://gems.ruby-china.org",rel:"noopener noreferrer",target:"_blank"},"RubyGems 镜像"),"、 Ruby 镜像 正式上线!"),h.default.createElement("p",null,h.default.createElement("code",null,"gem source -a https://gems.ruby-china.org")))))),h.default.createElement("div",{className:"row hidden-sm hidden-xs"},h.default.createElement("div",{className:"col-md-6"},h.default.createElement("div",{className:"thumbnail"},h.default.createElement("img",{className:"margin-30",src:"https://twemoji.b0.upaiyun.com/2/svg/1f381.svg",alt:"v2ex.png"}),h.default.createElement("div",{className:"caption box-top-line"},h.default.createElement("a",{href:"https://github.com/kunkkaliu",rel:"noopener noreferrer",target:"_blank"},h.default.createElement("div",null,"GitHub",h.default.createElement("span",{className:"glyphicon glyphicon-arrow-right pull-right"})))))),h.default.createElement("div",{className:"col-md-6"},h.default.createElement("div",{className:"thumbnail"},h.default.createElement("img",{className:"margin-30",src:"https://twemoji.b0.upaiyun.com/2/svg/1f381.svg",alt:"v2ex.png"}),h.default.createElement("div",{className:"caption box-top-line"},h.default.createElement(y.Link,{to:"/topics?type=excellent"},h.default.createElement("div",null,"精华文章",h.default.createElement("span",{className:"glyphicon glyphicon-arrow-right pull-right"}))))))),h.default.createElement(C.default,{topics:this.props.topics}))}}],[{key:"onEnter",value:function(e){var t=e.dispatch((0,b.getTopics)({type:"excellent"})).payload.promise;return[t]}}]),t}(h.default.Component))||n);D.propTypes={getTopics:O.default.func,topics:O.default.array};var L=D;t.default=L,t.DashboardTest=D;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(D,"Dashboard","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/Dashboard/index.jsx"),__REACT_HOT_LOADER__.register(L,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/Dashboard/index.jsx"))})()},270:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(25),s=a(134),n={mapStateToProps:function(e){return{topics:e.common.results.topics}},mapDispatchToProps:function(e){return{getTopics:(0,r.bindActionCreators)(s.getTopics,e)}}};t.default=n;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/Dashboard/mapping.js")})();e.exports=t.default},271:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(272),g=r(T),O=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.topics,t=e.length;return E.default.createElement("div",{className:"panel panel-default no-margin-bottom-xs topic-lists reset-panel-xs"},E.default.createElement("div",{className:"panel-heading margin-xs"},"社区精华帖"),E.default.createElement("div",{className:"row reset-row-xs"},E.default.createElement("div",{className:"col-md-6"},E.default.createElement(g.default,{topics:e.slice(0,t/2)})),E.default.createElement("div",{className:"col-md-6"},E.default.createElement(g.default,{topics:e.slice(t/2,t)}))))}}]),t}(E.default.PureComponent);O.propTypes={topics:h.default.array};var y=O;t.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"Excellent","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Excellent/index.jsx"),__REACT_HOT_LOADER__.register(y,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Excellent/index.jsx"))})();e.exports=t.default},272:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(222),g=a(273),O=r(g);a(274);var y=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.topics,t=e.map(function(e){return E.default.createElement("div",{className:"media topic",key:e.id},E.default.createElement("a",{className:"media-left",href:"#"},E.default.createElement("img",{className:"img-circle img-width-50",src:e.user.avatar_url,role:"presentation"})),E.default.createElement("div",{className:"media-body"},E.default.createElement(T.Link,{to:"/topics/"+e.id,className:"title"},e.title),e.excellent&&E.default.createElement("span",{className:"glyphicon glyphicon-heart left",title:"精华帖"}),E.default.createElement(O.default,{topic:e})),E.default.createElement("div",{className:"media-right count"},E.default.createElement("span",{className:"badge"},e.replies_count)))});return E.default.createElement("div",{className:"panel-body"},t)}}]),t}(E.default.PureComponent);y.propTypes={topics:h.default.array};var R=y;t.default=R;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"Lists","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Lists/index.jsx"),__REACT_HOT_LOADER__.register(R,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Lists/index.jsx"))})();e.exports=t.default},273:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(112),g=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.isShow,a=e.topic,r="",s="";return t&&(r=E.default.createElement("span",null,"发布于 ",T.Format.date(a.created_at)),s=E.default.createElement("span",null,a.hits," 次阅读")),E.default.createElement("div",{className:"infos"},E.default.createElement("span",{className:"separator"},a.node_name),"•",E.default.createElement("span",{className:"separator"},a.user.name),"•",null!==a.replied_at?E.default.createElement("span",{className:"separator"},r,"最后由",E.default.createElement("span",{className:"separator"},a.last_reply_user_login),"回复于 ",T.Format.date(a.replied_at)):E.default.createElement("span",{className:"separator"},"发布于 ",T.Format.date(a.created_at)),s)}}]),t}(E.default.PureComponent);g.propTypes={topic:h.default.object,isShow:h.default.bool};var O=g;t.default=O;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"TopicInfo","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/TopicInfo/index.jsx"),__REACT_HOT_LOADER__.register(O,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/TopicInfo/index.jsx"))})();e.exports=t.default},274:265,275:265,276:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s,n,i=a(184),u=r(i),o=a(188),l=r(o),c=a(189),d=r(c),_=a(193),f=r(_),p=a(194),E=r(p),m=a(2),h=r(m),T=a(202),g=r(T),O=a(205),y=a(222),R=a(277),A=r(R),v=a(278),C=r(v),b=a(272),D=r(b),L=a(134),k=(s=(0,O.connect)(A.default.mapStateToProps,A.default.mapDispatchToProps),s(n=function(e){function t(e){(0,l.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handleClick=function(){return a.__handleClick__REACT_HOT_LOADER__.apply(a,arguments)},a.uid=1,a.state={type:"last_actived"},a}return(0,E.default)(t,e),(0,d.default)(t,[{key:"__handleClick__REACT_HOT_LOADER__",value:function(){return this.__handleClick__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleClick__REACT_HOT_LOADER__",value:function(){return this.__handleClick__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleClick__REACT_HOT_LOADER__",value:function(){return this.__handleClick__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handleClick__REACT_HOT_LOADER__",value:function(e){this.uid=this.uid+1,this.setState({type:e})}},{key:"render",value:function(){var e=this,t=this.props.topics;return h.default.createElement("div",{className:"panel panel-default topic-lists"},h.default.createElement("div",{className:"panel-heading text-right"},h.default.createElement("span",{className:"separator light-gray-color"},"查看:"),h.default.createElement(y.Link,{to:"/topics?type=last_actived",onClick:function(){return e.handleClick("last_actived")}},"默认"),h.default.createElement("span",{className:"separator"},"/"),h.default.createElement("span",{className:"glyphicon glyphicon-heart right",title:"精华帖"}),h.default.createElement(y.Link,{to:"/topics?type=excellent",onClick:function(){return e.handleClick("excellent")}},"优质帖子"),h.default.createElement("span",{className:"separator"},"/"),h.default.createElement(y.Link,{to:"/topics?type=no_reply",onClick:function(){return e.handleClick("no_reply")}},"无人问津"),h.default.createElement("span",{className:"separator"},"/"),h.default.createElement(y.Link,{to:"/topics?type=recent",onClick:function(){return e.handleClick("recent")}},"最新创建")),h.default.createElement(D.default,{topics:t}),h.default.createElement(C.default,{key:this.uid,options:{type:this.state.type},pageCount:20,perPage:20,getTopics:this.props.getTopics}))}}],[{key:"onEnter",value:function(e,t){var a=e.dispatch((0,L.getTopics)({type:t&&t.name||"last_actived"})).payload.promise;return[a]}}]),t}(h.default.Component))||n);k.propTypes={getTopics:g.default.func,location:g.default.object,topics:g.default.array};var H=k;t.default=H;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(k,"Topics","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/Topics/index.jsx"),__REACT_HOT_LOADER__.register(H,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/Topics/index.jsx"))})();e.exports=t.default},277:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(25),s=a(134),n={mapStateToProps:function(e){return{topics:e.common.results.topics}},mapDispatchToProps:function(e){return{getTopics:(0,r.bindActionCreators)(s.getTopics,e)}}};t.default=n;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/Topics/mapping.js")})();e.exports=t.default},278:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(279),g=r(T);a(285);var O=function(e){function t(e){(0,u.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.handlePageClick=function(){return a.__handlePageClick__REACT_HOT_LOADER__.apply(a,arguments)},a.state={offset:0},a}return(0,f.default)(t,e),(0,l.default)(t,[{key:"__handlePageClick__REACT_HOT_LOADER__",value:function(){return this.__handlePageClick__REACT_HOT_LOADER__.apply(this,arguments)}},{key:"__handlePageClick__REACT_HOT_LOADER__",value:function(e){var t=this,a=this.props,r=a.perPage,s=a.options,n=a.getTopics,i=e.selected,u=Math.ceil(i*r);
this.setState({offset:u},function(){s.offset=t.state.offset,n(s)})}},{key:"render",value:function(){return E.default.createElement("div",{className:"panel-footer"},E.default.createElement(g.default,{previousLabel:"上一页",nextLabel:"下一页",breakLabel:E.default.createElement("span",null,"..."),breakClassName:"break-me",pageCount:this.props.pageCount,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))}}]),t}(E.default.PureComponent);O.propTypes={perPage:h.default.number,pageCount:h.default.number,options:h.default.object,getTopics:h.default.func};var y=O;t.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(O,"Paginate","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Paginate/index.jsx"),__REACT_HOT_LOADER__.register(y,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Paginate/index.jsx"))})();e.exports=t.default},285:265,286:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s,n,i=a(184),u=r(i),o=a(188),l=r(o),c=a(189),d=r(c),_=a(193),f=r(_),p=a(194),E=r(p),m=a(2),h=r(m),T=a(202),g=r(T),O=a(205),y=a(287),R=r(y),A=a(273),v=r(A),C=a(288),b=r(C),D=a(134);a(290),a(291);var L=(s=(0,O.connect)(R.default.mapStateToProps,R.default.mapDispatchToProps),s(n=function(e){function t(){return(0,l.default)(this,t),(0,f.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props,t=e.topic,a=e.replies,r=!t.title;return h.default.createElement("div",{className:"topic-detail-wrap"},!r&&h.default.createElement("div",{className:"panel panel-default topic-wrap"},h.default.createElement("div",{className:"panel-heading media"},h.default.createElement("div",{className:"media-body"},h.default.createElement("h4",null,t.title),h.default.createElement(v.default,{topic:t,isShow:!0})),h.default.createElement("a",{className:"media-right",href:"#"},h.default.createElement("img",{className:"img-circle img-width-50",src:t.user.avatar_url,role:"presentation"}))),h.default.createElement("div",{className:"panel-body markdown"},h.default.createElement("span",{dangerouslySetInnerHTML:{__html:t.body_html}})),h.default.createElement("div",{className:"panel-footer"})),r&&h.default.createElement("h2",null,"Loading..."),h.default.createElement(b.default,{replies:a}))}}],[{key:"onEnter",value:function(e,t){var a=e.dispatch((0,D.getTopic)(t&&t.id)).payload.promise,r=e.dispatch((0,D.getReplies)(t&&t.id)).payload.promise;return[a,r]}}]),t}(h.default.Component))||n);L.propTypes={getTopic:g.default.func,getReplies:g.default.func,match:g.default.object,topic:g.default.object,replies:g.default.array},L.contextTypes={store:g.default.object};var k=L;t.default=k;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(L,"TopicDetail","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/TopicDetail/index.jsx"),__REACT_HOT_LOADER__.register(k,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/TopicDetail/index.jsx"))})();e.exports=t.default},287:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(25),s=a(134),n={mapStateToProps:function(e){return{topic:e.common.results.topic,replies:e.common.results.replies}},mapDispatchToProps:function(e){return{getTopic:(0,r.bindActionCreators)(s.getTopic,e),getReplies:(0,r.bindActionCreators)(s.getReplies,e)}}};t.default=n;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/views/TopicDetail/mapping.js")})();e.exports=t.default},288:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(184),n=r(s),i=a(188),u=r(i),o=a(189),l=r(o),c=a(193),d=r(c),_=a(194),f=r(_),p=a(2),E=r(p),m=a(202),h=r(m),T=a(112);a(289);var g=function(e){function t(){return(0,u.default)(this,t),(0,d.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.replies,t=e.length,a=e.map(function(e){return E.default.createElement("div",{className:"media reply",key:e.id},E.default.createElement("a",{className:"media-left",href:"#"},E.default.createElement("img",{className:"img-circle img-width-50",src:e.user.avatar_url,role:"presentation"})),E.default.createElement("div",{className:"media-body"},E.default.createElement("div",{className:"info"},E.default.createElement("span",{className:"name"},e.user.name),E.default.createElement("span",{className:"time light-gray-color"},T.Format.date(e.created_at))),E.default.createElement("div",{className:"content markdown"},E.default.createElement("span",{dangerouslySetInnerHTML:{__html:e.body_html}}))),E.default.createElement("div",{className:"media-right count"}))});return E.default.createElement("div",{className:"panel panel-default replies-wrap"},E.default.createElement("div",{className:"panel-heading"},E.default.createElement("p",{className:"light-gray-color"},"共收到 ",t," 条回复")),E.default.createElement("div",{className:"panel-body"},a))}}]),t}(E.default.PureComponent);g.propTypes={replies:h.default.array};var O=g;t.default=O;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(g,"Replies","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Replies/index.jsx"),__REACT_HOT_LOADER__.register(O,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Replies/index.jsx"))})();e.exports=t.default},289:265,290:265,291:265,292:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(2),n=r(s),i=a(202),u=r(i);a(293);var o=function(e){var t=e.errorMsg,a=t||"404 Not Found";return n.default.createElement("div",{className:"not-found"},n.default.createElement("h1",null,a))};o.propTypes={errorMsg:u.default.string,route:u.default.object};var l=o;t.default=l;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"Error","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Error/index.jsx"),__REACT_HOT_LOADER__.register(l,"default","/Users/liudonghui/workspace/react/ruby-china-ssr/src/components/Error/index.jsx"))})();e.exports=t.default},293:265,294:265,295:265});
//# sourceMappingURL=main.22013e1a98c13cc75a54.js.map