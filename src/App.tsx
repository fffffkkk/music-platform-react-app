import React from 'react';

import AppRouter from '@/components/AppRouter';
import MainLayout from '@/layouts/MainLayout';

interface AppProps {}

const App = () => {
	return (
		<MainLayout>
			<AppRouter />
		</MainLayout>
	);
};

export default App;
