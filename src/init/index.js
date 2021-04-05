function uuidProfileCall( { apiKey, uuid } ) {
	const profileScript = document.createElement( 'script' );
	profileScript.src = `https://api.parsely.com/v2/profile?apikey=${ encodeURIComponent(
		apiKey
	) }&uuid=${ uuid || '' }&url=${ window.location.href }&callback=&_=${ +new Date() }`;
	document.querySelector( 'head' ).appendChild( profileScript );
}

export function initApi() {
	if ( typeof global.wpParsely !== 'object' ) {
		return;
	}

	const { apiKey } = global.wpParsely;

	if ( ! apiKey ) {
		return;
	}

	if ( typeof global.PARSELY === 'object' ) {
		const oldonload = global.PARSELY.onload;
		if ( typeof global.PARSELY.onload !== 'function' ) {
			global.PARSELY.onload = uuidProfileCall;
			return;
		}
		global.PARSELY.onload = function() {
			if ( oldonload ) {
				oldonload();
			}
			uuidProfileCall( { apiKey, uuid: global.PARSELY.config.parsely_site_uuid } );
		};
		return;
	}

	global.PARSELY = {
		onload: uuidProfileCall,
	};
}
