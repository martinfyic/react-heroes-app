import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const navigation = useNavigate();

	const onLogin = () => {
		const lastPath = localStorage.getItem('lastPath') || '/';

		login('Martin Ferreira');

		navigation(lastPath, {
			replace: true,
		});
	};

	return (
		<div className='container mt-5 text-center'>
			<h1 className='mb-5'>Login</h1>
			<hr />

			<button
				className='btn btn-dark mt-5'
				onClick={onLogin}
			>
				Login
			</button>
		</div>
	);
};
