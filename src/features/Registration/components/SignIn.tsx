import React from 'react';
import {signInWithEmailAndPassword} from "firebase/auth";

import {auth} from "@/firebase";
import {useActions} from "@/hooks/use-actions";
import AuthForm from "@/features/Registration/components/form/AuthForm";


interface SignInProps {
};
const SignIn = () => {
	const {addUser} = useActions();
	const handleSignIn = (e: React.FormEvent, form: { login: string, password: string }) => {
		e.preventDefault();
		if (!form.login || !form.password) return;
		
		signInWithEmailAndPassword(auth, form.login, form.password)
			.then(({user}) => {
				addUser({
					email: user.email!,
					id: user.uid,
					token: user.refreshToken,
				})
			});
	};
	
	return (
		<AuthForm title='Sign In' submit={handleSignIn}/>
	);
};

export default SignIn;
