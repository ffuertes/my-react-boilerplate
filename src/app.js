import React from 'react';
import {render} from 'react-dom';

import './scss/main.scss';

class Main extends React.Component {
	render() {
		return (
			<h1>Hello World!!!!</h1>
		);
	}
}

render(<Main/>, document.getElementById('app'));