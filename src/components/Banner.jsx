import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import { useEffect, useState } from 'react';
import '../scss/banner.scss';

const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 1000);
	const [index, setIndex] = useState(1);
	const toRotate = ['Web Developer', 'React Specialist', 'JavaScript Expert'];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(300);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='align-items-center'>
					<Col xs={12} md={6} xl={7}>
						<span className='tagline'>Welcome to my Portfolio</span>
						<h1>
							{`Hi I'm Eugen and`} <br /> <span className='wrap'>{text}</span>
						</h1>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit magni dolor ut earum ullam delectus illum!
							Enim voluptatibus nulla, consectetur eius labore, voluptates facere blanditiis nesciunt dicta sed minus dolor!
						</p>
						<button onClick={() => console.log('connect')}>
							Let's connect <ArrowRightCircle size={25} />
						</button>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt='Header Img'></img>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
