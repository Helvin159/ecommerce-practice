import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocFromAuth,
} from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords dont match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocFromAuth(user, { displayName: displayName });

			resetFields();
		} catch (e) {
			if (e.code === 'auth/email-already-in-use') {
				alert('Error, this email is already in use.');
			}
			console.log('Error creating user.', e);
		}

		// console.log(formFields);
	};

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					type='text'
					name='displayName'
					onChange={handleChange}
					value={displayName}
					required
				/>

				<FormInput
					label='Email'
					type='email'
					name='email'
					onChange={handleChange}
					value={email}
					required
				/>
				<FormInput
					label='Password'
					type='password'
					name='password'
					onChange={handleChange}
					value={password}
					required
				/>
				<FormInput
					label='Password'
					type='password'
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
					required
				/>
				<Button type='submit'>Sign up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
