import React from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/firebase';
import AuthForm from '@/features/Registration/components/form/AuthForm';
import { useActions } from '@/hooks/use-actions';

interface SignUpProps {}
const SignUp = () => {
	const { addUser } = useActions();
	const handleSignUp = (
		e: React.FormEvent,
		form: { email: string, password: string }
	) => {
		e.preventDefault();
		if (!form.email || !form.password) return;

		createUserWithEmailAndPassword(auth, form.email, form.password).then(
			({ user }) => {
				addUser({
					email: user.email!,
					id: user.uid,
					token: user.refreshToken,
				});
			}
		);
	};

	return <AuthForm title='Sign Up' submit={handleSignUp} />;
};

export default SignUp;
