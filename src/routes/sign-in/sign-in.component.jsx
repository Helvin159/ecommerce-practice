import {
	signInWithGooglePopup,
	createUserDocFromAuth,
} from '../../utils/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up.component';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);
		console.log(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}> Signin with google popup </button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
