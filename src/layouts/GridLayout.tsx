import React, {FC} from 'react';

interface GridLayoutProps {
	children: React.ReactNode;
};

const GridLayout: FC<GridLayoutProps> = ({children}) => {
	return (
		<div
			className='grid grid-cols-1 gap-5 text-center mt-5 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
			{children}
		</div>
	);
};

export default GridLayout;
