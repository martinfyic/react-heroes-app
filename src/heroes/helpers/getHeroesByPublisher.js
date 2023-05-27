import { heroes } from '../data/heroes';

export const getHeroesByPublisher = publisher => {
	const validPublisgers = ['DC Comics', 'Marvel Comics'];

	if (!validPublisgers.includes(publisher)) {
		throw new Error(`${publisher} no es valido!`);
	}

	return heroes.filter(hero => hero.publisher === publisher);
};
