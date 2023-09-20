import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter';

import React from 'react';

const MailchimpForm = () => {
	const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`; // Korrekturen
	return (
		<>
			<MailchimpSubscribe
				url={postUrl}
				render={({ subscribe, status, message }) => (
					<>
						<Newsletter
							status={status}
							message={message}
							onValidated={(formData) => subscribe(formData)} // Korrektur des Namens und der Syntax
						></Newsletter>
					</>
				)}
			/>
		</>
	);
};

export default MailchimpForm;
