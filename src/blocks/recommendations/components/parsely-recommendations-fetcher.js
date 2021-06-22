/**
 * External dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { useDebounce } from '@wordpress/compose';
import { useCallback, useEffect } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { setError, setRecommendations } from '../actions';
import { fetchRelated } from '../../../js/lib/parsely-api';
import { useRecommendationsStore } from '../recommendations-store';

const ParselyRecommendationsFetcher = ( { boost, limit, personalized, saveresults, sort } ) => {
	const {
		state: { error, isLoaded, uuid },
		dispatch,
	} = useRecommendationsStore();

	const apiQueryArgs = {
		boost,
		limit,
		sort,
	};

	if ( personalized && uuid ) {
		apiQueryArgs.uuid = uuid;
	} else {
		apiQueryArgs.url = window.location.href;
	}

	async function fetchRecosFromWpApi() {
		return apiFetch( {
			path: addQueryArgs( '/wp-parsely/v1/recommendations', apiQueryArgs ),
		} );
	}

	async function fetchRecos() {
		if ( saveresults && ! isLoaded ) {
			return;
		}

		let response;
		try {
			response = await fetchRelated( apiQueryArgs );
		} catch ( parselyError ) {
			try {
				response = await fetchRecosFromWpApi();
			} catch ( wpError ) {
				dispatch( setError( { error: wpError } ) );
			}
		}

		const data = response?.data || [];
		dispatch( setRecommendations( { recommendations: data } ) );
	}

	const apiMemoProps = [ ...Object.values( apiQueryArgs ), error, saveresults ];

	const updateRecosWhenPropsChange = useCallback( fetchRecos, apiMemoProps );

	const debouncedUpdate = useDebounce( updateRecosWhenPropsChange, 300 );

	/**
	 * Fetch recommendations:
	 * - On component mount
	 * - When an attribute changes that affects the API call.
	 *   (This happens in the Editor context when someone changes a setting.)
	 * - When the `saveresults` attribute changes.
	 */
	useEffect( debouncedUpdate, apiMemoProps );

	// This is a data-only component and does not render
	return null;
};

export default ParselyRecommendationsFetcher;
