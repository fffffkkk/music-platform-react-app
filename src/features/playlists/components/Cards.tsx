import React, { FC } from 'react';

import { useGetAllPlaylistsQuery } from '@/services/playlistService';
import CardItem from '@/features/playlists/components/CardItem';

interface CardsProps {}

const Cards: FC<CardsProps> = ({}) => {
	//@ts-ignore
	const { isLoading, data: playlists, isError } = useGetAllPlaylistsQuery();

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<>
			{playlists && (
				<>
					{playlists.map((playlist) => (
						<CardItem key={playlist.id} data={playlist} />
					))}
				</>
			)}
		</>
	);
};

export default Cards;
