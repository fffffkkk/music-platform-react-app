import {useTypedSelector} from './use-typed-selector';

export const useAuth = () => {
	const {id, email, token} = useTypedSelector((state) => state.user.user);
	
	return {
		isAuth: !!token,
		id: id,
		email: email,
		token: token,
	};
};
