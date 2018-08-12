'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _interactjs = require('interactjs');

var _interactjs2 = _interopRequireDefault(_interactjs);

var _timers = require('timers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uuidv1 = require('uuid/v1');

var ContainerWindow = function (_Component) {
    _inherits(ContainerWindow, _Component);

    function ContainerWindow(props) {
        _classCallCheck(this, ContainerWindow);

        //this.container = React.createRef();
        var _this = _possibleConstructorReturn(this, (ContainerWindow.__proto__ || Object.getPrototypeOf(ContainerWindow)).call(this, props));

        _this.propTypes = {
            title: _propTypes2.default.string.isRequired,
            class: _propTypes2.default.string,
            activeClass: _propTypes2.default.string,
            dragStart: _propTypes2.default.func.isRequired
        };
        _this.state = { uuid: uuidv1(), isOpened: props.options.isOpened, resetWindow: false };
        _this.openWindow = _this.openWindow.bind(_this);
        _this.minimizeWindow = _this.minimizeWindow.bind(_this);
        _this.closeWindow = _this.closeWindow.bind(_this);
        return _this;
    }

    _createClass(ContainerWindow, [{
        key: 'openWindow',
        value: function openWindow() {
            var options = this.props.options;


            var dataX = this.refs.container.getAttribute("data-x").replace("px", "");
            var dataY = this.refs.container.getAttribute("data-y").replace("px", "");
            if (dataX == options.initialPosition.left && dataY == options.initialPosition.top) {
                this.refs.container.setAttribute("data-x", options.openPosition.left);
                this.refs.container.setAttribute("data-y", options.openPosition.top);
                this.refs.container.setAttribute("style", "transform:translate(" + options.openPosition.left + "px," + options.openPosition.top + "px)");
            }

            this.setState({ isOpened: true });
            return false;
        }
    }, {
        key: 'minimizeWindow',
        value: function minimizeWindow() {
            console.log("minimize");

            this.setState({ isOpened: false });

            //this.refs.container.setAttribute("data-y",postion.top);
            // jQuery( '#'+this.state.uuid+" .collapse").collapse('hide');
            // jQuery( '#'+this.state.uuid).addClass("minimized");
        }
    }, {
        key: 'closeWindow',
        value: function closeWindow() {
            var options = this.props.options;


            console.log("close");
            this.setState({ isOpened: false, resetWindow: true });
            this.refs.container.setAttribute("data-x", options.initialPosition.left);
            this.refs.container.setAttribute("data-y", options.initialPosition.top);
            this.refs.container.setAttribute("style", "transform:translate(" + options.initialPosition.left + "px," + options.initialPosition.top + "px)");
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                options = _props.options,
                isOpened = _props.isOpened;

            (0, _interactjs2.default)('.draggable').draggable({

                allowFrom: '.handle',
                // enable inertial throwing
                inertia: true,
                // keep the element within the area of it's parent
                restrict: {
                    restriction: "body",
                    endOnly: true,
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                },
                // enable autoScroll
                autoScroll: true,

                // call this function on every dragmove event
                onmove: dragMoveListener,
                // call this function on every dragend event
                onend: function onend(event) {
                    //   var textEl = event.target.querySelector('p');

                    //   textEl && (textEl.textContent =
                    //     'moved a distance of '
                    //     + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                    //                  Math.pow(event.pageY - event.y0, 2) | 0))
                    //         .toFixed(2) + 'px');
                }
            });
            function dragMoveListener(event) {
                var target = event.target,

                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                // translate the element 
                target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            }
            // this is used later in the resizing and gesture demos
            window.dragMoveListener = dragMoveListener;
            var postion = this.state.isOpened ? options.openPosition : options.initialPosition;

            this.refs.container.setAttribute("data-x", postion.left);
            this.refs.container.setAttribute("data-y", postion.top);
            this.refs.container.setAttribute("style", "transform:translate(" + postion.left + "px," + postion.top + "px)");
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                title = _props2.title,
                options = _props2.options;


            return _react2.default.createElement(
                'div',
                { id: this.state.uuid, ref: 'container', style: { zIndex: 99999 }, className: "floatwindow card bg-dark text-light draggable " + (this.state.isOpened ? "" : "minimized") },
                _react2.default.createElement(
                    'div',
                    { className: 'card-header handle' },
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'btn btn-default text-light', onClick: this.openWindow },
                        _react2.default.createElement('i', { className: options.icon })
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        title
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'button', 'class': 'btn btn-sm btn-outline-danger pull-right', onClick: this.closeWindow },
                        ' ',
                        _react2.default.createElement('i', { className: 'fa fa-times' }),
                        ' '
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'modalMinimize btn btn-sm btn-outline-secondary pull-right', onClick: this.minimizeWindow },
                        ' ',
                        _react2.default.createElement('i', { className: 'fa fa-minus' }),
                        ' '
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: "card-body  collapse" + (this.state.isOpened ? "show" : ""), style: { minWidth: "400px" } },
                    this.props.children
                )
            );
        }
    }]);

    return ContainerWindow;
}(_react.Component);

exports.default = ContainerWindow;