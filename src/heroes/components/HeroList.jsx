import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<ul>
			{heroes.map(hero => (
				<li key={hero.id}>{hero.superhero}</li>
			))}
		</ul>
	);
};
