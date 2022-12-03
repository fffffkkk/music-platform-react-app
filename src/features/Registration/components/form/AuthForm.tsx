import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";

import {Button, Input} from "@/components/ui";


interface AuthFormProps {
	title: string;
	submit: (e: React.FormEvent, form: { login: string; password: string; }) => void;
};
const AuthForm: FC<AuthFormProps> = ({title, submit}) => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		password: '',
		login: '',
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({...form, [e.target.name]: e.target.value})
	};
	const handleSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		submit(e, form);
		setForm({password: '', login: ''});
	}
	
	return (
		<form className='flex flex-col items-center justify-center h-full gap-5'>
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
				<p className='text-white text-xs font-bold cursor-pointer text-center' onClick={() => navigate(`/signIn`)}>Уже
					зарегистрированы?</p>
			</div>
			<div onClick={handleSubmit}>
				<Button type='submit'>{title.toLowerCase()}</Button>
			</div>
		</form>
	);
};

export default AuthForm;
