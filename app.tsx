import * as React from 'react';
import * as ReactDom from 'react-dom';

const App: React.FC<any> = () => {
	return <h1>test</h1>;
};
ReactDom.render(<App />, document.getElementById('root'));
