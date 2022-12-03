import React, {FC, useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';

import {Button, Input} from "@/components/ui";
import {auth} from "@/firebase";

interface AuthFormProps {
	title: string;
};
const AuthForm: FC<AuthFormProps> = ({title}) => {
	const [form, setForm] = useState({
		password: '',
		login: '',
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({...form, [e.target.name]: e.target.value})
	};
	const handleSubmit = (e: React.FormEvent) => {
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
		<form onClick={handleSubmit} className='flex flex-col items-center justify-center h-full gap-5'>
			<h1 className='text-2xl text-white font-bold'>{title}</h1>
			<div className='flex flex-col gap-2'>
				<label className='text-lg text-white text-center'>
					Введите почту или логин:
					<Input type='email' value={form.login} change={handleChange} name='login'/>
				</label>
				<label className='text-lg text-white text-center'>
					Введите пароль:
					<Input type='password' value={form.password} change={handleChange} name='password'/>
				</label>
			</div>
			<Button type='submit'>Продолжить</Button>
		</form>
	);
};

export default AuthForm;
