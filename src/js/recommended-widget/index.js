import domReady from '@wordpress/dom-ready';

/**
 * Get the value of a particular cookie
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 * @todo pull this into a lib and add tests
 * @param {String} key Which cookie value to get
 * @returns {String|undefined} The value of the specified key, or `undefined` if it's not set.
 */
function getCookieValue( key ) {
	return document.cookie
		?.split( '; ' )
		?.find( ( row ) => row.startsWith( `${ key }=` ) )
		?.split( '=' )[ 1 ];
}

const VISITOR_COOKIE_KEY_NAME = '_parsely_visitor';

function widgetLoad( {
	displayAuthor,
	displayDirection,
	fullUrl,
	imgSrc,
	permalink,
	personalized,
	jQuery,
	widgetId,
} ) {
	let uuid = false;
	const cookieVal = getCookieValue( VISITOR_COOKIE_KEY_NAME );

	if ( cookieVal ) {
		try {
			uuid = JSON.parse( unescape( cookieVal ) ).id;
		} catch ( e ) {}
	}

	if ( personalized && uuid ) {
		fullUrl += `&uuid=${ uuid }`;
	} else {
		fullUrl += `&url=${ permalink }`;
	}
	let parentDiv = jQuery.find( `#${ widgetId }` );
	if ( parentDiv.length === 0 ) {
		parentDiv = jQuery.find( '.Parsely_Recommended_Widget' );
	}
	// make sure page is not attempting to load widget twice in the same spot
	if ( jQuery( parentDiv ).find( 'div.parsely-recommendation-widget' ).length != 0 ) {
		return;
	}

	const outerDiv = jQuery( '<div>' ).addClass( 'parsely-recommendation-widget' ).appendTo( parentDiv );
	if ( imgSrc !== 'none' ) {
		outerDiv.addClass( 'display-thumbnail' );
	}
	if ( displayDirection ) {
		outerDiv.addClass( 'list-' + displayDirection );
	}

	const outerList = jQuery( '<ul>' ).addClass( 'parsely-recommended-widget' ).appendTo( outerDiv );
	jQuery.getJSON( fullUrl, function( data ) {
		jQuery.each( data.data, function( key, value ) {
			const widgetEntry = jQuery( '<li>' )
				.addClass( 'parsely-recommended-widget-entry' )
				.attr( 'id', 'parsely-recommended-widget-item' + key );

			const textDiv = jQuery( '<div>' ).addClass( 'parsely-text-wrapper' );

			if ( imgSrc === 'parsely_thumb' ) {
				jQuery( '<img>' ).attr( 'src', value.thumb_url_medium ).appendTo( widgetEntry );
			} else if ( imgSrc === 'original' ) {
				jQuery( '<img>' ).attr( 'src', value.image_url ).appendTo( widgetEntry );
			}

			const itmId = `?itm_campaign=${ widgetId }`;
			const itmMedium = '&itmMedium=site_widget';
			const itmSource = '&itmSource=parsely_recommended_widget';
			const itmContent = '&itm_content=widget_item-' + key;
			const itmLink = value.url + itmId + itmMedium + itmSource + itmContent;

			const postTitle = jQuery( '<div>' ).attr( 'class', 'parsely-recommended-widget-title' );
			const postLink = jQuery( '<a>' ).attr( 'href', itmLink ).text( value.title );
			postTitle.append( postLink );
			textDiv.append( postTitle );

			if ( displayAuthor ) {
				const authorLink = jQuery( '<div>' )
					.attr( 'class', 'parsely-recommended-widget-author' )
					.text( value.author );
				textDiv.append( authorLink );
			}

			widgetEntry.append( textDiv );

			// set up the rest of entry
			outerList.append( widgetEntry );
		} );
		outerDiv.append( outerList );
	} );
}

domReady( () => {
	const { jQuery, wpParselyRecommended } = global;
	widgetLoad( { ...wpParselyRecommended, jQuery } );
} );
