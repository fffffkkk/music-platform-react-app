import React, {FC} from 'react'

interface HomeLayoutProps {
	children: React.ReactNode;
};
const HomeLayout: FC<HomeLayoutProps> = ({children}) => {
	return (
		<div className='pt-10'>
			{children}
		</div>
	);
};

export default HomeLayout;
