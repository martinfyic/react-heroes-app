import { HeroList } from '../components';

export const DcPage = () => {
	return (
		<>
			<h1 className='fs-1 fw-bold text-center mt-3'>DC Comics</h1>
			<hr />

			<HeroList publisher='DC Comics' />
		</>
	);
};
