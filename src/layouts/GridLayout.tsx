import React, {FC} from 'react';

interface GridLayoutProps {
	children: React.ReactNode;
};

const GridLayout: FC<GridLayoutProps> = ({children}) => {
	return (
		<div className=''>
			{children}
		</div>
	);
};

export default GridLayout;
