import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useActions} from "@/hooks/use-actions";

const Navbar = ({}) => {
	const {removeUser} = useActions();
	const navigate = useNavigate();
	
	const handleLogout = () => {
		removeUser();
		navigate('/signUp')
	}
	
	return (
		<div className="navbar bg-slate-900 rounded-b-lg">
			<div className="flex-1">
				<Link to='/' className="btn btn-ghost normal-case text-xl">MUSIC<span className='text-pink-400'>ON</span></Link>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control" onClick={() => navigate('/search')}>
					<input type="text" placeholder="Search" className="input input-bordered"/>
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people"/>
						</div>
					</label>
					<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-900 rounded-box w-52">
						<li>
							<Link to='/user-profile/{this uid user}'>Profile</Link>
						</li>
						<li>
							<Link to='/playlists'>Your Library</Link>
						</li>
						<li onClick={handleLogout}><a>LogOut</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
