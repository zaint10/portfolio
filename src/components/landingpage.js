import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

/* My Social Links*/
import { github, twitter, linkedin, leetcode, aboutme } from '../const';
import { SocialLink } from './presentations';
class LandingPage extends Component {
	render() {
		return (
			<div style={styles.root}>
				<Grid className="landing-grid">
					<Cell noSpacing style={{ marginBottom: '15px' }} col={12}>
						<div className="banner-text">
							<h1>Software Developer</h1>
							<div className="solid-line">
								<span class="line" />
								<span class="fa fa-bolt fa-3x" aria-hidden="true" />
								<span class="line" />
							</div>
							<h2>
								HTML/CSS | JS(ES6) | Python | Java | ReactJs | ReactNative | SQL | Mobile/Hybrid |
								Desktop{' '}
							</h2>
							<div className="social-links">
								<SocialLink link={linkedin.link} class={linkedin.class} />
								<SocialLink link={github.link} class={github.class} />
								<SocialLink link={leetcode.link} class={leetcode.class} />
								<SocialLink link={twitter.link} class={twitter.class} />
							</div>
						</div>
					</Cell>
				</Grid>
				<Grid className="abtme-grid" noSpacing={true}>
					<Cell class="abtme" col={12}>
						<Cell col={12}>
							<h1>
								ABOUT ME<span>
									<strong> .</strong>
								</span>
							</h1>
							<div className="solid-line">
								<span class="line" />
								<span class="fa fa-bolt fa-3x" aria-hidden="true" />
								<span class="line" />
							</div>
						</Cell>
						<Cell col={12}>
							<p>{aboutme}</p>
						</Cell>
					</Cell>
				</Grid>
			</div>
		);
	}
}

const styles = {
	root: {
		width: '100%',
		height: 'auto',
		margin: 'auto'
	}
};
export default LandingPage;
