import React from 'react';

import {Route, Routes} from "react-router-dom";

import {Navbar, Search} from "@/features/Home";
import {Playlists, Profile} from "@/pages";
import HomeLayout from "@/layouts/HomeLayout";
import Playlist from "@/pages/Playlist";

const Home = () => {
	
	return (
		<>
			<Navbar/>
			<HomeLayout>
				<Routes>
					<Route path='/search' element={<Search/>}/>
					<Route path='/playlists' element={<Playlists/>}/>
					<Route path='/playlist/:id' element={<Playlist/>}/>
					<Route path='/user-profile/:id' element={<Profile/>}/>
					<Route path='/*' element={<Playlists/>}/>
				</Routes>
			</HomeLayout>
		</>
	);
};

export default Home;
