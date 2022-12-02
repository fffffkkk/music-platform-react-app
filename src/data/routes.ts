import {Home, Registration} from "@/pages";


export const publicRoutes = [
	{path: '/*', element: Registration}
]
export const privateRoutes = [
	{path: '/*', element: Home}
]
