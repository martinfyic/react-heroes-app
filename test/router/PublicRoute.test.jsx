/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';

describe('pruebas en PublicRoute.jsx', () => {
	test('debe de mostrar el children si no esta auth', () => {
		const contextValue = {
			logged: false,
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<h1>Public Router</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Public Router')).toBeTruthy();
	});
});
