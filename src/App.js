import React from 'react';

import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import Footer from './components/footer'
import { Link } from 'react-router-dom';

function App() {
	return (
		<div>
			<Layout className="app-root" fixedHeader>
			
					<Header hideTop
						className="header"
						title={
							<Link className="header-title" to="/">
								Zain Tanveer |
						</Link>}>

						<Navigation className="nav">
							<Link to="/resume.pdf">
								<p>Resume</p>
							</Link>
							<Link to="/projects">
								<p>Projects</p>
							</Link>
							<Link to="/contact">
								<p>Contact</p>
							</Link>
						</Navigation>
					</Header>
				
				
				
				<Content>
						<Main />
						{/* <Footer /> */}	
				</Content>
				
			</Layout>
			
		</div>
	);
}

export default App;
