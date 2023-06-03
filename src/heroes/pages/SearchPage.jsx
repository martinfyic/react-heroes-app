import { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks';
import { getHerosByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);
	const heroesByName = useMemo(() => getHerosByName(q), [q]);

	// Logica para mostrar errores en busqueda
	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroesByName.length === 0;

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const onSearchSubmit = event => {
		event.preventDefault();

		navigate(`?q=${searchText.trim()}`);
	};

	return (
		<>
			<h1 className='fs-1 fw-bold text-center mt-3'>Search</h1>
			<hr />

			<div className='row mt-5'>
				<div className='col-5 text-center'>
					<h4 className='text-center'>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input
							type='text'
							placeholder='Search a hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>

						<button className='btn btn-dark mt-4'>Search</button>
					</form>
				</div>
				<div className='col-7'>
					<h4 className='text-center'>Results</h4>
					<hr />
					<div
						className='alert alert-primary text-center mt-4 animate__animated animate__fadeIn'
						style={{ display: showSearch ? '' : 'none' }}
					>
						Search a hero
					</div>
					<div
						className='alert alert-danger text-center mt-4 animate__animated animate__shakeX'
						style={{
							display: showError ? '' : 'none',
						}}
					>
						No results with <b>{q}</b>
					</div>
					{heroesByName.map(hero => (
						<HeroCard
							key={hero.id}
							{...hero}
						/>
					))}
				</div>
			</div>
		</>
	);
};
