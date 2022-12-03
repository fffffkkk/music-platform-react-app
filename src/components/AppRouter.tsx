import React from 'react';
import {Route, Routes} from "react-router-dom";

import {privateRoutes, publicRoutes} from "@/data/routes";
import {useAuth} from "@/hooks/useAuth";

interface AppRouterProps {
};
const AppRouter = () => {
	const {isAuth} = useAuth();
	
	return (
		<Routes>
			{
				isAuth ? <>{privateRoutes.map((route) =>
					<Route path={route.path} element={<route.element/>} key={route.path}/>
				)}</> : <>{publicRoutes.map((route) =>
					<Route path={route.path} element={<route.element/>} key={route.path}/>
				)}</>
			}
		</Routes>
	);
};

export default AppRouter;
