import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';
import 'animate.css';
import './styles.css';

export const HeroesApp = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
};
