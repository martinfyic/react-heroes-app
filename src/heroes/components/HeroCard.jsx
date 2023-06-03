import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) =>
	alter_ego === characters ? <></> : <p className='card-text'>{characters}</p>;

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImageUrl = `/heroesAssets/${id}.jpg`;

	return (
		<div className='col animate__animated animate__fadeIn mb-2'>
			<div className='card'>
				<div className='row no-gutters'>
					<div className='col-4'>
						<img
							src={heroImageUrl}
							alt={superhero}
							className='card-img'
						/>
					</div>
					<div className='col-8'>
						<div className='card-body'>
							<h5>{superhero}</h5>
							<p className='card-text'>{alter_ego}</p>

							<CharactersByHero
								characters={characters}
								alter_ego={alter_ego}
							/>

							<p className='card-text'>
								<small className='text-muted'>{first_appearance}</small>
							</p>

							<Link to={`/hero/${id}`}>Mas info...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
