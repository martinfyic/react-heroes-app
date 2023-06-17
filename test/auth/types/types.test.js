/* eslint-disable no-undef */
import { types } from '../../../src/auth';

describe('Pruebas eb "Types.js"', () => {
	test('debe de regresar estos types', () => {
		expect(types).toEqual({
			login: '[Auth] Login',
			logout: '[Auth] logout',
		});
	});
});
