import React, {FC} from 'react';

import {inputTypes} from "@/types/input";

interface InputProps {
	type: inputTypes;
	name: string;
	value: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input: FC<InputProps> = ({type, name, value, change}) => {
	return (
		<input value={value} onChange={change} type={type}
		       className="input input-bordered input-secondary w-full max-w-xs text-pink-500 font-bold"
		       name={name} placeholder={value}/>
	);
};

export default Input;
