import * as React from 'react';
import * as ReactDom from 'react-dom';
import SpringSumUp from './animation-components/index';
const App: React.FC<any> = () => {
	return (
		<div>
			<SpringSumUp />
		</div>
	);
};
ReactDom.render(<App />, document.getElementById('root'));
