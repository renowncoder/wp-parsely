/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useRecommendationsStore } from '../recommendations-store';

const ParselyRecommendationsInspectorControls = ( {
	attributes: {
		boost,
		imagestyle,
		layoutstyle,
		limit,
		personalized,
		saveresults,
		savedresults,
		showimages,
		sort,
		tag,
		title,
	},
	setAttributes,
} ) => {
	const {
		state: { error, isLoaded, recommendations },
	} = useRecommendationsStore();

	useEffect( () => {
		if ( error || ! isLoaded ) {
			return;
		}
		if ( saveresults && typeof recommendations === 'undefined' ) {
			return;
		}
		setAttributes( { savedresults: saveresults ? recommendations : undefined } );
	}, [ error, isLoaded, recommendations, saveresults ] );

	const hasRecos = ! error && isLoaded && recommendations?.length;
	const canSaveResults = ! personalized && ( hasRecos || savedresults?.length );

	return (
		<InspectorControls>
			<PanelBody title="Settings" initialOpen={ true }>
				<PanelRow>
					<TextControl
						label={ __( 'Title', 'wp-parsely' ) }
						value={ title }
						onChange={ ( newval ) => setAttributes( { title: newval } ) }
					/>
				</PanelRow>
				<PanelRow>
					<RangeControl
						label={ __( 'Maximum Results', 'wp-parsely' ) }
						min="1"
						max="99"
						onChange={ ( newval ) => setAttributes( { limit: newval, savedresults: undefined } ) }
						value={ limit }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Images', 'wp-parsely' ) }
						help={
							showimages
								? __( 'Showing images', 'wp-parsely' )
								: __( 'Not showing images', 'wp-parsely' )
						}
						checked={ showimages }
						onChange={ () => setAttributes( { showimages: ! showimages } ) }
					/>
				</PanelRow>
				{ showimages && (
					<PanelRow>
						<RadioControl
							label={ __( 'Image style', 'wp-parsely' ) }
							selected={ imagestyle }
							options={ [
								{ label: __( 'Original image', 'wp-parsely' ), value: 'original' },
								{ label: __( 'Thumbnail from Parse.ly', 'wp-parsely' ), value: 'thumbnail' },
							] }
							onChange={ ( newval ) =>
								setAttributes( {
									imagestyle: newval === 'original' ? 'original' : 'thumbnail',
								} )
							}
						/>
					</PanelRow>
				) }
				<PanelRow>
					<RadioControl
						label={ __( 'Display style', 'wp-parsely' ) }
						help={ __( 'Show the list of recommended links in a grid or list', 'wp-parsely' ) }
						selected={ layoutstyle }
						options={ [
							{ label: __( 'Grid', 'wp-parsely' ), value: 'grid' },
							{ label: __( 'List', 'wp-parsely' ), value: 'list' },
						] }
						onChange={ ( newval ) =>
							setAttributes( {
								layoutstyle: newval === 'list' ? 'list' : 'grid',
							} )
						}
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Personalize to Visitor', 'wp-parsely' ) }
						help={
							personalized ? __( 'Personalized', 'wp-parsely' ) : __( 'Not Personalized', 'wp-parsely' )
						}
						checked={ personalized }
						onChange={ () =>
							setAttributes( {
								personalized: ! personalized,
								saveresults: false,
								savedresults: [],
							} )
						}
					/>
				</PanelRow>
				{ canSaveResults && (
					<PanelRow>
						<ToggleControl
							label={ __( 'Save Results to block', 'wp-parsely' ) }
							checked={ saveresults }
							onChange={ () => setAttributes( { saveresults: ! saveresults } ) }
						/>
						{ false }
					</PanelRow>
				) }
				<PanelRow>
					<TextControl
						label={ __( 'Tag', 'wp-parsely' ) }
						value={ tag }
						onChange={ ( newval ) => setAttributes( { tag: newval } ) }
					/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={ __( 'Sort Recommendations', 'wp-parsely' ) }
						value={ sort }
						options={ [
							{ label: 'Score', value: 'score' },
							{
								label: __( 'Publication Date', 'wp-parsely' ),
								value: 'pub_date',
							},
						] }
						onChange={ ( newval ) => setAttributes( { sort: newval } ) }
					/>
				</PanelRow>
				<PanelRow>
					<SelectControl
						label={ __( 'Boost', 'wp-parsely' ) }
						value={ boost }
						options={ [
							{ label: __( 'Views', 'wp-parsely' ), value: 'views' },
							{
								label: __( 'Mobile Views', 'wp-parsely' ),
								value: 'mobile_views',
							},
							{
								label: __( 'Tablet Views', 'wp-parsely' ),
								value: 'tablet_views',
							},
							{
								label: __( 'Desktop Views', 'wp-parsely' ),
								value: 'desktop_views',
							},
							{
								label: __( 'Tablet Views', 'wp-parsely' ),
								value: 'tablet_views',
							},
							{
								label: __( 'Visitors', 'wp-parsely' ),
								value: 'visitors',
							},
							{
								label: __( 'Visitors New', 'wp-parsely' ),
								value: 'visitors_new',
							},
							{
								label: __( 'Visitors Returning', 'wp-parsely' ),
								value: 'visitors_returning',
							},
							{
								label: __( 'Engaged Minutes', 'wp-parsely' ),
								value: 'engaged_minutes',
							},
							{
								label: __( 'Avergae Engaged', 'wp-parsely' ),
								value: 'avg_engaged',
							},
							{
								label: __( 'Avergae Engaged New', 'wp-parsely' ),
								value: 'avg_engaged_new',
							},
							{
								label: __( 'Avergae Engaged Returning', 'wp-parsely' ),
								value: 'avg_engaged_returning',
							},
							{
								label: __( 'Social Interactions', 'wp-parsely' ),
								value: 'social_interactions',
							},
							{
								label: __( 'Facebook Interactions', 'wp-parsely' ),
								value: 'fb_interactions',
							},
							{
								label: __( 'Twitter Interactions', 'wp-parsely' ),
								value: 'tw_interactions',
							},
							{
								label: __( 'LinkedIn Interactions', 'wp-parsely' ),
								value: 'li_interactions',
							},
							{
								label: __( 'Pinterest Interactions', 'wp-parsely' ),
								value: 'pi_interactions',
							},
							{
								label: __( 'Facebook Referrals', 'wp-parsely' ),
								value: 'fb_referrals',
							},
							{
								label: __( 'Twitter Referrals', 'wp-parsely' ),
								value: 'tw_referrals',
							},
							{
								label: __( 'LinkedIn Referrals', 'wp-parsely' ),
								value: 'li_referrals',
							},
							{
								label: __( 'Pinterest Referrals', 'wp-parsely' ),
								value: 'pi_referrals',
							},
						] }
						onChange={ ( newval ) => setAttributes( { boost: newval } ) }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);
};

export default ParselyRecommendationsInspectorControls;