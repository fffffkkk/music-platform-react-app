import React from 'react';
import { useState } from 'react';

export const useChangeFile = (data: any) => {
	const [input, setInput] = useState(data);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		//@ts-ignore
		setInput({ ...input, [e.target.name]: e.target.files[0] });
	};

	return [input, handleChange];
};
