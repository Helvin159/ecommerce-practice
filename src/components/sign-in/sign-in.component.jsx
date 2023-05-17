import { useState } from 'react';
import {
	createUserDocFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import './sign-in.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);

			resetFields();
		} catch (e) {
			switch (e.code) {
				case 'auth/wrong-password':
					alert('Error, wrong password!');
					break;
				case 'auth/user-not-found':
					alert('Error, user not found');
					break;
				case 'auth/network-request-failed':
					alert('Request failed');
					break;
				default:
					console.log('Error loging user in.', e);
			}
		}
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with email and password</span>
			<form>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<div className='buttons-container'>
					<Button onClick={handleSubmit} type='submit'>
						Sign In
					</Button>
					<Button type='button' onClick={signInWithGoogle} buttonType='google'>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
