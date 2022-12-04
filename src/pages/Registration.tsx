import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignIn, SignUp } from '@/features/Registration';

interface RegistrationProps {}
const Registration = () => {
	return (
		<Routes>
			<Route path='/*' element={<SignUp />} />
			<Route path='/signIn' element={<SignIn />} />
		</Routes>
	);
};

export default Registration;
