"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_spring_1 = require("react-spring");
var div_hooks_1 = require("./div-hooks");
var DivHooksComponent = function (props) {
    var slow = { mass: 15, tension: 200, friction: 50 };
    var slower = { mass: 20, tension: 200, friction: 50 };
    var transRectangle = function (x, y) { return x + "px"; };
    var _a = react_spring_1.useTrail(props.magnifyingDiv, function () { return ({
        xy: [0, 0],
        config: function (i) { return (i === 0 ? slow : slower); },
    }); }), cubes = _a[0], set = _a[1];
    console.log(props);
    return (react_1.default.createElement(div_hooks_1.DivHooks, { backgroundImage: props.backgroundImage, widthContent: props.widthContent, backgroundAttachmentContent: props.backgroundAttachmentContent, backgroundPositionContent: props.backgroundPositionContent, backgroundSizeContent: props.backgroundSizeContent, backgroundRepeatContent: props.backgroundRepeatContent, onMouseMove: function (event) {
            set({ xy: [event.clientX, event.clientY] });
        } }, cubes.map(function (props, index) { return (react_1.default.createElement(react_spring_1.animated.div, { key: index, style: {
            left: props.xy.interpolate(transRectangle),
        } })); })));
};
exports.default = DivHooksComponent;
//# sourceMappingURL=div-hooks-component.js.map