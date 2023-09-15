import React, { useState } from 'react';

const Contact = () => {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	};

	const [formDetails, setFormDetails] = useState(formInitialDetails);

	return <div>Contact</div>;
};

export default Contact;
