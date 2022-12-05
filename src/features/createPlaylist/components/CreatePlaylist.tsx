import React, { FC } from 'react';

import PlaylistForm from '@/features/createPlaylist/components/form/PlaylistForm';
import Modal from "@/features/createPlaylist/components/ui/Modal";

interface CreatePlaylistProps {}

const CreatePlaylist: FC<CreatePlaylistProps> = ({}) => {
	return (
		<Modal>
			<PlaylistForm />
		</Modal>
	);
};

export default CreatePlaylist;
