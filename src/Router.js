import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Pages
import { Home, Login } from './containers';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/' component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
