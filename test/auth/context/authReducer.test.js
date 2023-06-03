/* eslint-disable no-undef */
import { authReducer, types } from '../../../src/auth';

describe('Pruebas en el authReducer.js', () => {
	test('debe de retornar el estado por defecto', () => {
		const state = authReducer({ logged: false }, {});
		expect(state).toEqual({ logged: false });
	});

	test('debe de (login) llamar el login autenticar y establecer el use', () => {
		const action = {
			types: types.login,
			payload: {
				id: '123',
				name: 'Test login',
			},
		};

		const state = authReducer({ logged: false }, action);

		expect(state).toEqual({
			logged: true,
			user: action.payload,
		});
	});

	test('debe de (logout) borrar el name del usuario y logged en false ', () => {
		const initialState = {
			logged: true,
			user: {
				id: '123123',
				name: 'Test logout',
			},
		};

		const action = {
			types: types.logout,
		};

		const state = authReducer(initialState, action);
		expect(state).toEqual({ logged: false });
	});
});
