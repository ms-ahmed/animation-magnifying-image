"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var div_hooks_component_1 = __importDefault(require("./div-hooks-component"));
var AnimationMagnify = function (_a) {
    var height = _a.height, width = _a.width, padding = _a.padding, opacity = _a.opacity, backgroundImage = _a.backgroundImage, backgroundRepeat = _a.backgroundRepeat, backgroundColor = _a.backgroundColor, backgroundSize = _a.backgroundSize, widthContent = _a.widthContent, magnifyingDiv = _a.magnifyingDiv, backgroundAttachmentContent = _a.backgroundAttachmentContent, backgroundPositionContent = _a.backgroundPositionContent, backgroundSizeContent = _a.backgroundSizeContent;
    var rootStyle = {
        height: height,
        width: width,
        padding: padding,
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize,
        opacity: opacity,
    };
    return (react_1.default.createElement("div", { style: rootStyle },
        react_1.default.createElement(div_hooks_component_1.default, { backgroundImage: backgroundImage, backgroundAttachmentContent: backgroundAttachmentContent, widthContent: widthContent, magnifyingDiv: magnifyingDiv, backgroundPositionContent: backgroundPositionContent, backgroundSizeContent: backgroundSizeContent })));
};
AnimationMagnify.propTypes = {
    height: prop_types_1.default.string,
    width: prop_types_1.default.string,
    padding: prop_types_1.default.string,
    opacity: prop_types_1.default.string,
    backgroundColor: prop_types_1.default.string,
    backgroundAttachment: prop_types_1.default.string,
    backgroundImage: prop_types_1.default.string,
    backgroundRepeat: prop_types_1.default.string,
    backgroundSize: prop_types_1.default.string,
    widthContent: prop_types_1.default.string,
    backgroundAttachmentContent: prop_types_1.default.string,
    backgroundPositionContent: prop_types_1.default.string,
    magnifyingDiv: prop_types_1.default.number,
    backgroundSizeContent: prop_types_1.default.string,
};
AnimationMagnify.defaultProps = {
    height: '400px',
    width: '100%',
    padding: '0',
    opacity: '0.8',
    backgroundImage: 'url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    magnifyingDiv: 4,
    widthContent: '100px',
    backgroundAttachmentContent: 'fixed',
    backgroundPositionContent: '0%',
    backgroundSizeContent: '120% 120%',
};
exports.default = AnimationMagnify;
//# sourceMappingURL=index.js.map