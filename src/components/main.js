import React from 'react';

import { hashHistory,Switch, Route } from 'react-router-dom';
import { Projects, LandingPage, Resume, Contact } from './index.js';

const Main = () => (
	<Switch>
		<Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />

		<Route path="/resume.pdf" component={Resume} />
		<Route path="/projects" component={Projects} />
		<Route path="/contact" component={Contact} />
	</Switch>
);

export default Main;
