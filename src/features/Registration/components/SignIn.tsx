import React from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";

import AuthForm from "@/features/Registration/components/form/AuthForm";
import {auth} from "@/firebase";

interface SignInProps {
};
const SignIn = () => {
	const handleSignIn = (e: React.FormEvent, form: { login: string, password: string }) => {
		e.preventDefault();
		if (!form.login || !form.password) return;
		
		signInWithEmailAndPassword(auth, form.login, form.password)
			.then((user) => {
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	
	return (
		<AuthForm title='Sign In' submit={handleSignIn}/>
	);
};

export default SignIn;
