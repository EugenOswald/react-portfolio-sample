import React from 'react';
import { Container, Col, Nav, Row, Tab } from 'react-bootstrap';
import '../scss/project.scss';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

const Projects = () => {
	const projects = [
		{
			title: 'Join Kanban',
			description: 'JavaScript | CSS | HTML',
			imgUrl: projImg1,
		},
		{
			title: 'Join Kanban',
			description: 'JavaScript | CSS | HTML',
			imgUrl: projImg2,
		},
		{
			title: 'Join Kanban',
			description: 'JavaScript | CSS | HTML',
			imgUrl: projImg3,
		},
	];
	return (
		<section className='project' id='projects'>
			<Container>
				<Row>
					<Col>
						<h2>Projects</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo aperiam consectetur nemo nulla sapiente,
							inventore, molestias praesentium quam tenetur laboriosam iure molestiae. Ab aut ex accusamus, deserunt repellat
							rem!
						</p>
						<Tab.Container id='projects-tabs' defaultActiveKey='first'>
							<Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
								<Nav.Item>
									<Nav.Link eventKey='first'>Tab 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='second'>Tab 2</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey='third'>Tab 3</Nav.Link>
								</Nav.Item>
							</Nav>

							<Tab.Content>
								<Tab.Pane eventKey='first'>
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
			<img className='background-image-left' src={colorSharp2} alt='Image' />
		</section>
	);
};

export default Projects;
