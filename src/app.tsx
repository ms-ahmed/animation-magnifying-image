import * as React from 'react';
import * as ReactDom from 'react-dom';
import Magnifying from 'magnifying';

const App: React.FC<any> = () => {
	return <Magnifying />;
};
ReactDom.render(<App />, document.getElementById('root'));
