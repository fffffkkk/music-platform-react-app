import React, { FC } from 'react';

import { Cards } from '@/features/playlists';
import GridLayout from '@/layouts/GridLayout';

interface PlaylistsProps {}

const Playlists: FC<PlaylistsProps> = ({}) => {
	return (
		<GridLayout>
			<Cards />
		</GridLayout>
	);
};

export default Playlists;
