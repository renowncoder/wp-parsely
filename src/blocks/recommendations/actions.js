import { RECO_BLOCK_ERROR, RECO_BLOCK_LOADED, RECO_BLOCK_RECOMMENDATIONS } from './constants';

export const setError = ( { error } ) => ( {
	type: RECO_BLOCK_ERROR,
	error,
} );

export const setRecommendations = ( { recommendations } ) => ( {
	type: RECO_BLOCK_RECOMMENDATIONS,
	recommendations,
} );

export const setLoaded = () => ( {
	type: RECO_BLOCK_LOADED,
} );