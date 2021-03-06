'use strict';

var _apiRunnerBrowser = require('api-runner-browser');

var _apiRunnerBrowser2 = _interopRequireDefault(_apiRunnerBrowser);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Let the site/plugins run code very early.
(0, _apiRunnerBrowser2.default)('clientEntry');

var rootElement = document.getElementById('react-mount');
var Root = require('./root');
if (Root.default) {
  Root = Root.default;
}

// Let site, plugins wrap the site e.g. for Redux.
var NewRoot = (0, _apiRunnerBrowser2.default)('wrapRootComponent', { Root: Root }, Root);
_reactDom2.default.render(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(NewRoot, null)
), rootElement);

if (module.hot) {
  module.hot.accept('./root', function () {
    var NextRoot = require('./root');
    if (NextRoot.default) {
      NextRoot = NextRoot.default;
    }
    // Let site, plugins wrap the site e.g. for Redux.
    var NewRoot = (0, _apiRunnerBrowser2.default)('wrapRootComponent', { Root: NextRoot }, NextRoot);
    _reactDom2.default.render(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NewRoot, null)
    ), rootElement);
  });
}