import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import { ProjectCard } from './presentations';

/* Projects Details*/
import { Details } from '../const';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activetabs: 0 };
	}
	getNoOfCards(N, projects) {
		let noOfCards = [];
		for (let i = 0; i < N; i++) {
			let project = projects[i];
			noOfCards.push(<ProjectCard title={project[0]} des={project[1]} img={project[2]} />);
		}
		return noOfCards;
	}
	toggleCategories() {
		let noOfCards = [];
		let projectId = this.state.activetabs;
		let totCategory = Object.keys(Details).length;
		console.log(totCategory);
		let projects = null;
		let N = null;
		if (projectId === 0) {
			for (let i = 1; i <= totCategory; i++) {
				projects = Details[i];
				N = projects.length;
				noOfCards.push(this.getNoOfCards(N, projects));
			}
		} else {
			projects = Details[projectId];
			N = projects.length;
			noOfCards.push(this.getNoOfCards(N, projects));
		}

		return <div className="projects-grid">{noOfCards}</div>;
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs
					activetabs={this.state.activeTabs}
					onChange={(tabId) => this.setState({ activetabs: tabId })}
					ripple
				>
					<Tab>All</Tab>
					<Tab>ReactJs</Tab>
					<Tab>Android</Tab>
					<Tab>ReactNative</Tab>
					<Tab>Python</Tab>
					<Tab>Web</Tab>
					<Tab>Data Sceince</Tab>
				</Tabs>
				<section>{this.toggleCategories()}</section>
			</div>
		);
	}
}

export default Projects;
