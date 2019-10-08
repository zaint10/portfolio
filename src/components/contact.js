import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { ctc_hireMe } from '../const';
class Contact extends Component {
	render() {
		return (
			<div className="ctct-root">
				<Grid shadow={4} noSpacing={true} className="ctct-grid">
					<Cell className="ctct-cell" col={6}>
						<h2>Z | T</h2>
						<img src="/assets/images/me2.jpeg" alt="Zain Tanveer" />
						<p>{ctc_hireMe + ctc_hireMe}</p>
					</Cell>
					<Cell className="ctct-cell" col={6}>
						<h2>Contact Me</h2>

						<hr />
						<div className="ctct">
							<List>
								<ListItem>
									<ListItemContent className="ctct-items">
										<i className="fa fa-envelope" aria-hidden="true" />
										zat938@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent className="ctct-items">
										<i className="fa fa-phone" aria-hidden="true" />
										+92 320 4419651
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent className="ctct-items">
										<i className="fa fa-skype" aria-hidden="true" />
										zat405@outlook.com
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
					<div className="ctct-footer" />
				</Grid>
			</div>
		);
	}
}

export default Contact;
