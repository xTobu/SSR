/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render
	var express = __webpack_require__(14);
	// we'll use this to render our app to an html string

	var path = __webpack_require__(15);
	var compression = __webpack_require__(16);

	function renderPage(appHtml, title) {
	    return '\n  <!doctype html public="storage">\n  <html>\n  <meta charset=utf-8/>\n  <meta name="description" content=">Tobu - ' + title + '">\n  <title>Tobu</title>\n      <link rel="icon" href="/favicon.ico">\n      <!--reset.css-->\n      <link rel="stylesheet" href="css/reset.css">\n      <!--\u4E3B\u8981\u7684css-->\n      <link rel="stylesheet" href="css/index.css">\n      <link rel="stylesheet" href="css/about.css">\n      <link rel="stylesheet" href="css/portfolio.css">\n  <div id=app>' + appHtml + '</div>\n  <script src="/bundle.js"></script>\n ';
	}

	var app = express();

	app.use(compression());

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, '../../publish')));

	app.get('*', function (req, res) {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	        // in here we can make some decisions all at once
	        if (err) {
	            // there was an error somewhere during route matching
	            res.status(500).send(err.message);
	        } else if (redirect) {
	            // we haven't talked about `onEnter` hooks on routes, but before a
	            // route is entered, it can redirect. Here we handle on the server.
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            // if we got props then we matched a route and can render
	            var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	            var title = null;
	            switch (props.location.pathname) {

	                case '/portfolio':
	                    {
	                        title = 'Portfolio';
	                        break;
	                    }
	                case '/':
	                    {
	                        title = 'About';
	                        break;
	                    }
	                default:
	                    {
	                        title = 'About';
	                        break;
	                    }
	            }
	            res.send(renderPage(appHtml, title));
	        } else {
	            // no errors, no redirect, we just didn't match anything
	            res.status(404).send('Not Found');
	        }
	    });
	});
	/* 參考來源 https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering */

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	    console.info('==> \uD83C\uDF0E  Listening on port ' + PORT + '. Open up http://localhost:' + PORT + '/ in your browser.');
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "entry\\server"))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _Wrap = __webpack_require__(5);

	var _Wrap2 = _interopRequireDefault(_Wrap);

	var _About = __webpack_require__(11);

	var _About2 = _interopRequireDefault(_About);

	var _Portfolio = __webpack_require__(12);

	var _Portfolio2 = _interopRequireDefault(_Portfolio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _Wrap2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _About2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/portfolio', component: _Portfolio2.default })
	); // modules/routes.js

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(6);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _Header = __webpack_require__(7);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(10);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Wrap',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'wrap' },
	      _react2.default.createElement(_Header2.default, null),
	      _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          component: 'div',
	          className: 'content',
	          transitionName: 'example',
	          transitionEnterTimeout: 500,
	          transitionLeaveTimeout: 500
	        },
	        _react2.default.cloneElement(this.props.children, {
	          key: this.props.location.pathname
	        })
	      ),
	      _react2.default.createElement(_Footer2.default, null)
	    );
	  }
	});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _NavLink = __webpack_require__(8);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Header',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'header' },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Tobu'
	      ),
	      _react2.default.createElement(
	        'nav',
	        null,
	        _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/', onlyActiveOnIndex: true },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/portfolio' },
	            'Portfolio'
	          )
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: 'https://xtobu.github.io/', target: '_blank', rel: 'noopener noreferrer' },
	            'Notes'
	          )
	        )
	      )
	    );
	  }
	});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _NavLink = __webpack_require__(9);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_NavLink).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // modules/NavLink.js


	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'NavLink',
	    render: function render() {
	        return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'selected' }));
	    }
	});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: "Footer",
	    render: function render() {
	        return _react2.default.createElement(
	            "div",
	            { className: "footer" },
	            "Copyright \xA9 2017 - Junxiang"
	        );
	    }
	});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "About",
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "about" },
	      _react2.default.createElement(
	        "div",
	        { id: "Profile" },
	        _react2.default.createElement("img", { src: "img/Profile.jpg", alt: "Profile" })
	      ),
	      _react2.default.createElement(
	        "h2",
	        null,
	        "About me"
	      ),
	      _react2.default.createElement(
	        "p",
	        null,
	        "I`m a self-taught developer who learned from TreeHouse & StackOverflow."
	      ),
	      _react2.default.createElement("hr", null),
	      _react2.default.createElement(
	        "p",
	        { className: "bold" },
	        "Skills\uFF1A"
	      ),
	      _react2.default.createElement(
	        "ul",
	        null,
	        _react2.default.createElement(
	          "li",
	          null,
	          "javascript, C#"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "React, Webpack, ESLint, jQuery, TweenMax, SlickJS, WowJS"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Node.js, ASP.NET MVC, GCP, Azure, AWS"
	        )
	      ),
	      _react2.default.createElement("hr", null),
	      _react2.default.createElement(
	        "p",
	        { className: "bold" },
	        "Work history\uFF1A"
	      ),
	      _react2.default.createElement(
	        "ul",
	        null,
	        _react2.default.createElement(
	          "li",
	          null,
	          "Back-end Intern in MSI."
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Front-end Developer in WebGene."
	        )
	      ),
	      _react2.default.createElement("hr", null)
	    );
	  }
	});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Cube = __webpack_require__(13);

	var _Cube2 = _interopRequireDefault(_Cube);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Portfolio',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'portfolio' },
	      _react2.default.createElement(_Cube2.default, {
	        CubeUrl: 'https://www.sprite.tw/2017coolgame24s/index.html',
	        HeaderImg: '/img/projects/header/sprite.jpg',
	        HeaderTitle: 'Sprite',
	        HeaderEvent: '\u6C81\u6DBC\u7D55\u6BBA24\u79D2',
	        ContentImg: 'img/projects/1.png'
	      }),
	      _react2.default.createElement(_Cube2.default, {
	        CubeUrl: 'http://cell.webgene.com.tw/technic/project/Sprite/aws/2017beyou/',
	        HeaderImg: '/img/projects/header/sprite.jpg',
	        HeaderTitle: 'Sprite',
	        HeaderEvent: 'COOL\u73A9\u74F6',
	        ContentImg: 'img/projects/2.png'
	      }),
	      _react2.default.createElement(_Cube2.default, {
	        CubeUrl: 'http://cell.webgene.com.tw/technic/Junxiang/FUBON/0503Vicky/',
	        HeaderImg: '/img/projects/header/fubon.png',
	        HeaderTitle: 'Fubon',
	        HeaderEvent: '\u70BA\u4F60\u52A0\u6CB9 \u53CB\u529B\u653E\u9001',
	        ContentImg: 'img/projects/3.png'
	      })
	    );
	  }
	});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Cube",
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "cube" },
	      _react2.default.createElement(
	        "div",
	        { className: "cube_header" },
	        _react2.default.createElement("img", { className: "cube_img", src: this.props.HeaderImg, alt: "cube_img" }),
	        _react2.default.createElement(
	          "div",
	          { className: "cube_title" },
	          _react2.default.createElement(
	            "ul",
	            null,
	            _react2.default.createElement(
	              "li",
	              null,
	              _react2.default.createElement(
	                "a",
	                { href: this.props.CubeUrl, target: "_blank", className: "cube_title_brand" },
	                this.props.HeaderTitle
	              )
	            ),
	            _react2.default.createElement(
	              "li",
	              null,
	              _react2.default.createElement(
	                "a",
	                { href: this.props.CubeUrl, target: "_blank", className: "cube_title_event" },
	                this.props.HeaderEvent
	              )
	            )
	          )
	        )
	      ),
	      _react2.default.createElement("hr", null),
	      _react2.default.createElement(
	        "a",
	        { href: this.props.CubeUrl, target: "_blank" },
	        _react2.default.createElement("img", { className: "imgBox", src: this.props.ContentImg, alt: "" })
	      )
	    );
	  }
	});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("compression");

/***/ })
/******/ ]);