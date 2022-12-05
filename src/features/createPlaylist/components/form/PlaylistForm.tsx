import React, { FC, useEffect } from 'react';

import { Button, Input } from "@/components/ui";
import { useChange } from '@/hooks/use-change';
import { useChangeFile } from '@/features/createPlaylist/components/hooks/use-change-file';
import InputFile from '@/features/createPlaylist/components/ui/InputFile';

interface PlaylistFormProps {}

const PlaylistForm: FC<PlaylistFormProps> = ({}) => {
	const [form, setForm] = useChange({
		title: '',
		about: '',
	});
	const [files, setFiles] = useChangeFile({ imageURL: '', audioURL: '' });

	useEffect(() => {
		console.log(Object.assign(form, files));
	}, [files]);

	return (
		<form className='flex flex-col gap-2 items-center'>
			<Input
				text='Введите заголовок: '
				type='text'
				name='title'
				value={form.title}
				change={(e) => setForm(e)}
			/>
			<Input
				text='Введите описание: '
				type='text'
				name='about'
				value={form.about}
				change={(e) => setForm(e)}
			/>
			<InputFile
				change={(e) => setFiles(e)}
				name='imageURL'
				text='Загрузите изображение'
				accept='image/*, .gif'
			/>
			<InputFile
				change={(e) => setFiles(e)}
				name='audioURL'
				text='Загрузите аудиозапись'
				accept='audio/*'
			/>
			<Button type='submit'>Создать</Button>
		</form>
	);
};

export default PlaylistForm;
