'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Map = require('ol/Map');

var _Map2 = _interopRequireDefault(_Map);

var _View = require('ol/View');

var _View2 = _interopRequireDefault(_View);

var _Tile = require('ol/layer/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _XYZ = require('ol/source/XYZ');

var _XYZ2 = _interopRequireDefault(_XYZ);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapView = function (_Component) {
    _inherits(MapView, _Component);

    function MapView(props) {
        _classCallCheck(this, MapView);

        var _this = _possibleConstructorReturn(this, (MapView.__proto__ || Object.getPrototypeOf(MapView)).call(this, props));

        _this.PropTypes = {
            centerPoint: _propTypes2.default.object.isRequired,
            width: _propTypes2.default.string.isRequired,
            height: _propTypes2.default.number.isRequired,
            mapZoom: _propTypes2.default.number.isRequired

        };

        _this.layerMarker = null;
        _this.radiusCircle = null;
        _this.map = null;
        _this.osm = null;
        _this.marker = null;
        _this.click = false;
        _this.clickTimeout = null;

        return _this;
    }

    _createClass(MapView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                centerPoint = _props.centerPoint,
                mapZoom = _props.mapZoom;

            // this.props.getUserSelectedArea();

            var mapId = this.props.mapId || 'mapid';

            var lat = centerPoint.lat,
                lng = centerPoint.lng;

            console.log(centerPoint);
            console.log(mapZoom);
            console.log(mapId);
            this.map = new _Map2.default({
                target: mapId,
                layers: [new _Tile2.default({
                    source: new _XYZ2.default({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })],
                view: new _View2.default({
                    projection: 'EPSG:4326',
                    center: [lng, lat],
                    zoom: mapZoom
                })
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                mapId = _props2.mapId,
                height = _props2.height,
                width = _props2.width;

            return _react2.default.createElement('div', { id: mapId, className: 'mapContainer', style: { height: height, width: width } });
        }
    }]);

    return MapView;
}(_react.Component);

exports.default = MapView;