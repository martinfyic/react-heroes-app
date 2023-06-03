import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute, PublicRoute } from './index';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path='/*'
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};
