import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import { response } from 'express';

const Contact = () => {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	};

	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [butttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setButtonText('Sending...');
		let reponse = await fetch('http://localhost:5000/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json;charset=utf-8',
			},
			body: JSON.stringify(formDetails),
		});
		setButtonText('Send');
		let result = response.json();
		setFormDetails(formInitialDetails);
		if (result.code === 200) {
			setStatus({ success: true, message: 'Message sent successfully' });
		} else {
			setStatus({ success: false, message: ' Somethin went wrong, please try again later.' });
		}
	};

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	return (
		<section className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col md={6}>
						<img src={contactImg} alt='Contact Us' />
					</Col>
					<Col md={6}>
						<h2>Get in Touch</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className='px-1'>
									<input
										type='text'
										value={formDetails.firstName}
										placeholder='First Name'
										onChange={(e) => onFormUpdate('firstName', e.target.value)}
									/>
								</Col>
								<Col sm={6} className='px-1'>
									<input
										type='text'
										value={formDetails.lastName}
										placeholder='Last Name'
										onChange={(e) => onFormUpdate('lastName', e.target.value)}
									/>
								</Col>
								<Col sm={6} className='px-1'>
									<input
										type='email'
										value={formDetails.email}
										placeholder='eMail'
										onChange={(e) => onFormUpdate('email', e.target.value)}
									></input>
								</Col>
								<Col sm={6} className='px-1'>
									<input
										type='tel'
										value={formDetails.phone}
										placeholder='Phone'
										onChange={(e) => onFormUpdate('phone', e.target.value)}
									></input>
								</Col>
								<Col sm={6} className='px-1'>
									<textarea
										rows={6}
										type='text'
										value={formDetails.message}
										placeholder='Message'
										onChange={(e) => onFormUpdate('message', e.target.value)}
									></textarea>
									<button type='submit'>
										<span>{butttonText}</span>
									</button>
								</Col>
								{status.message && (
									<Col>
										<p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
									</Col>
								)}
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
