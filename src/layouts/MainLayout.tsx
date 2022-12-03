import React, {FC} from 'react';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
	return (
		<div className='w-screen h-screen bg-slate-800'>
			<div className="max-w-[1350px] mx-auto h-full px-5">
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
