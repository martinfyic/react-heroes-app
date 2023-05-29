import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
	const { id } = useParams();
	const navigation = useNavigate();

	const hero = useMemo(() => getHeroById(id), [id]);

	const onNavigateBack = () => {
		navigation(-1);
	};

	if (!hero) return <Navigate to='/marvel' />;

	return (
		<div className='container'>
			<div className='row mt-5'>
				<div className='col-4 animate__animated animate__fadeInLeft'>
					<img
						src={`/heroesAssets/${id}.jpg`}
						alt={hero.superhero}
						className='img-thumbnail'
					/>
				</div>
				<div className='container col-8 text-center'>
					<h3 className='text-center fw-bold'>{hero.superhero}</h3>
					<ul className='list-group list-group-flush mt-3'>
						<li className='list-group-item mt-3'>
							<b>Alter ego:</b> {hero.alter_ego}
						</li>
						<li className='list-group-item mt-3'>
							<b>Publisher:</b> {hero.publisher}
						</li>
						<li className='list-group-item mt-3'>
							<b>First appearance:</b> {hero.first_appearance}
						</li>
					</ul>
					<h5 className='mt-5'>Characters</h5>
					<p className='mt-2'>{hero.characters}</p>
					<button
						className='btn btn-outline-primary mt-5'
						onClick={onNavigateBack}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};
