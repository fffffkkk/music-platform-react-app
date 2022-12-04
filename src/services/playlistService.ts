import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { addDoc, collection, getDocs, getDoc, doc } from 'firebase/firestore';

import { db } from '@/firebase';
import playlists from '@/pages/Playlists';
import { IPlaylist } from '@/models/IPlaylist';

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
						playlists.push({ id: doc.id, ...doc.data() });
					});
					return { data: playlists };
				} catch (error) {
					return { error };
				}
			},
			providesTags: ['playlist'],
		}),
		getPlaylistByID: builder.query<any, any>({
			async queryFn(id: string) {
				try {
					const docRef = doc(db, 'playlists', id);
					const docSnap = await getDoc(docRef);

					return { data: docSnap.data() };
				} catch (error) {
					return { error };
				}
			},
			providesTags: ['playlist'],
		}),
	}),
});

export const { useGetAllPlaylistsQuery, useGetPlaylistByIDQuery } = playlistAPI;
