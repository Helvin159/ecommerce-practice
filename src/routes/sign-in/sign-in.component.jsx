import {
	signInWithGooglePopup,
	createUserDocFromAuth,
} from '../../utils/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocFromAuth(user);
		console.log(user);
	};

	return (
		<div>
			<h1>Sign In</h1>
			<button onClick={logGoogleUser}> Signin with google popup </button>
		</div>
	);
};

export default SignIn;
