import React from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth";

import {auth} from "@/firebase";
import AuthForm from "@/features/Registration/components/form/AuthForm";

interface SignUpProps {
};
const SignUp = () => {
	const handleSignUp = (e: React.FormEvent, form: { login: string, password: string }) => {
		e.preventDefault();
		if (!form.login || !form.password) return;
		
		createUserWithEmailAndPassword(auth, form.login, form.password)
			.then((user) => {
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	
	return (
		<AuthForm title='Sign Up' submit={handleSignUp}/>
	);
};

export default SignUp;
