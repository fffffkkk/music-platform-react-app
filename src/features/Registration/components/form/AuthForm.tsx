import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@/components/ui';
import { useChange } from '@/hooks/use-change';

interface AuthFormProps {
	title: string;
	submit: (
		e: React.FormEvent,
		form: { email: string, password: string }
	) => void;
}

const AuthForm: FC<AuthFormProps> = ({ title, submit }) => {
	const navigate = useNavigate();
	const [form, setForm] = useChange({ email: '', password: '' });

	const handleSubmit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		submit(e, form);
	};

	return (
		<form className='flex flex-col items-center justify-center h-full gap-5'>
			<h1 className='text-2xl text-white font-bold'>{title}</h1>
			<div className='flex flex-col gap-2'>
				<Input
					text='Введите почту или логин:'
					type='email'
					value={form.email}
					change={(e) => setForm(e)}
					name='email'
				/>
				<Input
					text='Введите пароль:'
					type='password'
					value={form.password}
					change={(e) => setForm(e)}
					name='password'
				/>
				<p
					className='text-white text-xs font-bold cursor-pointer text-center'
					onClick={() => navigate(`/signIn`)}
				>
					Уже зарегистрированы?
				</p>
			</div>
			<div onClick={handleSubmit}>
				<Button type='submit'>{title.toLowerCase()}</Button>
			</div>
		</form>
	);
};

export default AuthForm;
