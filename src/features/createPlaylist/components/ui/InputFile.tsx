import React, { FC } from 'react';

interface InputFileProps {
	accept: string;
	name: string;
	text: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: FC<InputFileProps> = ({ accept, change, name, text }) => {
	return (
		<label className='text-lg flex flex-col text-center font-bold'>
			{text}
			<input
				type='file'
				accept={accept}
				onChange={change}
				name={name}
			/>
		</label>
	);
};

export default InputFile;
