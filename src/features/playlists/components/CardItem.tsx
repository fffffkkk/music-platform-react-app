import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { IPlaylist } from '@/models/IPlaylist';

interface CardItemProps {
	data: IPlaylist;
}

const CardItem: FC<CardItemProps> = ({ data }) => {
	const navigate = useNavigate();
	const { title, id } = data;

	return (
		<div
			className='card w-96 bg-slate-500 shadow-xl cursor-pointer'
			onClick={() => navigate(`/playlist/${id}`)}
		>
			<figure>
				<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
			</div>
		</div>
	);
};

export default CardItem;
