import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core';
import './index.css';
import Router from './Router';

ReactDOM.render(
	<React.StrictMode>
		<StylesProvider injectFirst>
			<Router />
		</StylesProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
