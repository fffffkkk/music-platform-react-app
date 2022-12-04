import React, { FC } from 'react';

import { useParams } from 'react-router-dom';
import { useGetPlaylistByIDQuery } from '@/services/playlistService';

interface PlaylistProps {}

const Playlist: FC<PlaylistProps> = ({}) => {
	const { id } = useParams();
	//@ts-ignore
	const { isLoading, data } = useGetPlaylistByIDQuery(id);
	
	if (isLoading) return <h1>Loading</h1>

	return (
		<div>
			<div>{data.title}</div>
		</div>
	);
};

export default Playlist;
