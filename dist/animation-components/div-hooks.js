"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivHooks = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.DivHooks = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tposition: relative;\n\theight: inherit;\n\twidth: inherit;\n\tbackground-attachment: fixed;\n\toverflow: hidden;\n\t& > span {\n\t\tposition: absolute;\n\t\twill-change: transform;\n\t\tbackground: lightcoral;\n\t\topacity: 0.6;\n\t}\n\n\t& > div {\n\t\tz-index: 1;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\theight: inherit;\n\t\twidth: ", ";\n\t\t-webkit-box-shadow: 1px 0px 28px -3px rgba (0, 0, 0, 0.7);\n\t\tbox-shadow: 1px 0px 28px -3px rgba(0, 0, 0, 0.7);\n\t\tbackground-image: ", ";\n\t\tbackground-position: ", ";\n\t\tbackground-size: ", ";\n\t\t-webkit-background-size: ", ";\n\t\t-moz-background-size: ", ";\n\t\t-o-background-size: ", ";\n\t\tbackground-attachment: ", ";\n\t}\n"], ["\n\tposition: relative;\n\theight: inherit;\n\twidth: inherit;\n\tbackground-attachment: fixed;\n\toverflow: hidden;\n\t& > span {\n\t\tposition: absolute;\n\t\twill-change: transform;\n\t\tbackground: lightcoral;\n\t\topacity: 0.6;\n\t}\n\n\t& > div {\n\t\tz-index: 1;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\theight: inherit;\n\t\twidth: ", ";\n\t\t-webkit-box-shadow: 1px 0px 28px -3px rgba (0, 0, 0, 0.7);\n\t\tbox-shadow: 1px 0px 28px -3px rgba(0, 0, 0, 0.7);\n\t\tbackground-image: ", ";\n\t\tbackground-position: ", ";\n\t\tbackground-size: ", ";\n\t\t-webkit-background-size: ", ";\n\t\t-moz-background-size: ", ";\n\t\t-o-background-size: ", ";\n\t\tbackground-attachment: ", ";\n\t}\n"])), function (props) { return props.widthContent; }, function (props) { return props.backgroundImage; }, function (props) { return props.backgroundPositionContent; }, function (props) { return props.backgroundSizeContent; }, function (props) { return props.backgroundSizeContent; }, function (props) { return props.backgroundSizeContent; }, function (props) { return props.backgroundSizeContent; }, function (props) { return props.backgroundAttachmentContent; });
var templateObject_1;
//# sourceMappingURL=div-hooks.js.map