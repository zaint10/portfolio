import React from 'react';

import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

const ProjectCard = (props) => {
	var header = style.alt_header;
	if (props.img != null) {
		var img = `url(${props.img})`;
		header = {
			background: `${img} center top/ 100% 70% no-repeat`,
			minHeight: '70%'
		};
	}

	return (
		<Card
			shadow={5}
			style={{
				minWidth: '370px',
				maxWidth: '400px',
				minHeight: '500px',
				maxHeight: '400px',
				margin: '8px'
			}}
		>
			<Card
				style={{
					width: '100%',
					height: '100%'
				}}
			>
				<CardTitle expand style={header}>
					<p style={style.title}>{props.title}</p>
				</CardTitle>

				<CardText style={style.desc}>{props.des}</CardText>
			</Card>

			<CardActions border>
				<Button colored>GitHub</Button>
			</CardActions>
		</Card>
	);
};

const style = {
	root: {},
	title: {
		fontSize: '1.5rem',
		backgroundColor: '#100d2b',
		color: '#f48f50',
		position: 'absolute',
		top: '55%',

		opacity: '.9',

		left: '0px',
		width: '80%',

		margin: 'auto',
		padding: '15px',
		fontFamily: 'Judson' + ' sans-serif'
	},
	desc: {
		fontSize: '16px',
		height: '700px',

		margin: 'auto',
		alignText: 'justify',
		justifyContent: 'center',
		fontFamily: 'Judson' + ' sans-serif'
	},
	alt_header: {
		background: `url(/assets/images/waitinng.jpg) center top/ 100% 70% no-repeat`,
		minHeight: '70%'
	}
};

export default ProjectCard;
