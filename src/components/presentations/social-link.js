import React from 'react';

const SocialLink = (props) => {
	return (
		<a href={props.link} rel="noopener noreferrer" target="_blank">
			<div>
				<i className={props.class} aria-hidden="true" />
			</div>
		</a>
	);
};

export default SocialLink;
