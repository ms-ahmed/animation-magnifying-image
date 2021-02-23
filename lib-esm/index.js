import * as React from 'react';
import * as ReactDom from 'react-dom';
import SpringSumUp from './animation-components/index';
var App = function () {
    return (React.createElement("div", null,
        React.createElement(SpringSumUp, null)));
};
ReactDom.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map