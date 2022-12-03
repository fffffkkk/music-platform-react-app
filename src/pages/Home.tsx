import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Navbar, Search} from "@/features/Home";
import {Playlists, Profile} from "@/pages";
import HomeLayout from "@/layouts/HomeLayout";

const Home = () => {
	
	return (
		<>
			<Navbar/>
			<HomeLayout>
				<Routes>
					<Route path='/search' element={<Search/>}/>
					<Route path='/playlists' element={<Playlists/>}/>
					<Route path='/user-profile/:id' element={<Profile/>}/>
				</Routes>
			</HomeLayout>
		</>
	);
};

export default Home;
