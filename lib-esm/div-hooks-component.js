import React from 'react';
import { useTrail, animated } from 'react-spring';
import { DivHooks } from './div-hooks';
var DivHooksComponent = function (props) {
    var slow = { mass: 15, tension: 200, friction: 50 };
    var slower = { mass: 20, tension: 200, friction: 50 };
    var transRectangle = function (x, y) { return x + "px"; };
    var _a = useTrail(props.magnifyingDiv, function () { return ({
        xy: [0, 0],
        config: function (i) { return (i === 0 ? slow : slower); },
    }); }), cubes = _a[0], set = _a[1];
    console.log(props);
    return (React.createElement(DivHooks, { backgroundImage: props.backgroundImage, widthContent: props.widthContent, backgroundAttachmentContent: props.backgroundAttachmentContent, backgroundPositionContent: props.backgroundPositionContent, backgroundSizeContent: props.backgroundSizeContent, backgroundRepeatContent: props.backgroundRepeatContent, onMouseMove: function (event) {
            set({ xy: [event.clientX, event.clientY] });
        } }, cubes.map(function (props, index) { return (React.createElement(animated.div, { key: index, style: {
            left: props.xy.interpolate(transRectangle),
        } })); })));
};
export default DivHooksComponent;
//# sourceMappingURL=div-hooks-component.js.map