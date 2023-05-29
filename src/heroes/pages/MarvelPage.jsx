import { HeroList } from '../components';

export const MarvelPage = () => {
	return (
		<>
			<h1 className='fs-1 fw-bold text-center mt-3'>Marvel Comics</h1>
			<hr />

			<HeroList publisher='Marvel Comics' />
		</>
	);
};
