'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContainerWindow = require('../components/ContainerWindow');

var _ContainerWindow2 = _interopRequireDefault(_ContainerWindow);

var _MapView = require('../components/MapView');

var _MapView2 = _interopRequireDefault(_MapView);

var _Layers = require('./Layers');

var _Layers2 = _interopRequireDefault(_Layers);

var _SearchTools = require('./SearchTools');

var _SearchTools2 = _interopRequireDefault(_SearchTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'tools' },
                    _react2.default.createElement(
                        _ContainerWindow2.default,
                        { title: 'Layers Tools', options: { icon: "fa fa-map", isOpened: true, initialPosition: { top: 40, left: 0 }, openPosition: { top: 40, left: 120 }, closePosition: { top: 40, left: 80 } } },
                        _react2.default.createElement(_Layers2.default, null)
                    ),
                    _react2.default.createElement(
                        _ContainerWindow2.default,
                        { title: 'Search Tools', options: { icon: "fa fa-search", isOpened: false, initialPosition: { top: 100, left: 0 }, openPosition: { top: 40, left: 120 }, closePosition: { top: 100, left: 80 } } },
                        _react2.default.createElement(_SearchTools2.default, null)
                    )
                ),
                _react2.default.createElement(_MapView2.default, { mapId: 'mainMap', centerPoint: { lat: 20.59, lng: 78.25 }, mapZoom: '4', height: '100vh', width: '100%' })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;