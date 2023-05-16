import { useState } from 'react';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	console.log(formFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={null}>
				<label>Display Name</label>
				<input
					type='text'
					name='displayName'
					onChange={handleChange}
					value={displayName}
					required
				/>
				<label>Email</label>
				<input
					type='email'
					name='email'
					onChange={handleChange}
					value={email}
					required
				/>
				<label>Password</label>
				<input
					type='password'
					name='password'
					onChange={handleChange}
					value={password}
					required
				/>
				<label>Confirm Password</label>
				<input
					type='password'
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
					required
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default SignUpForm;
