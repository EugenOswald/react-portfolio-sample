import React from 'react';
import { MailChimpForm } from './MailchimpForm';
import logo from '../assets/img/logo.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row className='align-item-center'>
					<MailChimpForm>
						<Col sm={6}>
							<img src={logo} alt='Logo' />
						</Col>
					</MailChimpForm>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
