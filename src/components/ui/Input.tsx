import React, { FC } from 'react';

import { inputTypes } from '@/types/input';

interface InputProps {
	type: inputTypes;
	name: string;
	value: string;
	text: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = ({ type, name, value, change, text }) => {
	return (
		<label className='text-lg gap-2 flex flex-col text-center font-bold'>
			{text}
			<input
				value={value}
				onChange={change}
				type={type}
				className='input input-bordered input-secondary w-full max-w-xs text-pink-500 font-bold'
				name={name}
				placeholder={value}
			/>
		</label>
	);
};

export default Input;
