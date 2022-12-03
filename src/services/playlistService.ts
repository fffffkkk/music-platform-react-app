import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import {collection, getDocs} from "firebase/firestore";

import {db} from "@/firebase";
import playlists from "@/pages/Playlists";
import {IPlaylist} from "@/models/IPlaylist";

export const playlistAPI = createApi({
	reducerPath: 'playlistAPI',
	baseQuery: fakeBaseQuery(),
	tagTypes: ['playlist'],
	endpoints: (builder) => ({
		getAllPlaylists: builder.query({
			async queryFn() {
				try {
					const blogRef = collection(db, 'playlists');
					const querySnapshot = await getDocs(blogRef);
					let playlists: IPlaylist[] = [];
					querySnapshot?.forEach((doc) => {
						//@ts-ignore
						playlists.push({...doc.data()});
					});
					return {data: playlists};
				} catch (error) {
					return {error};
				}
			},
			providesTags: ['playlist']
		}),
	}),
});

export const {useGetAllPlaylistsQuery} = playlistAPI;
