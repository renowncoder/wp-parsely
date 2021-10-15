<?php
/**
 * Structured Data Tests for single Pages.
 *
 * @package Parsely\Tests
 */

declare(strict_types=1);

namespace Parsely\Tests\Integration\StructuredData;

use Parsely;

/**
 * Structured Data Tests for single Pages.
 *
 * @see https://www.parse.ly/help/integration/jsonld
 * @covers \Parsely::construct_parsely_metadata
 */
final class SinglePageTest extends NonPostTestCase {

	/**
	 * Create a single page, and test the structured data.
	 *
	 * @covers \Parsely::construct_parsely_metadata
	 * @uses \Parsely::get_author_name
	 * @uses \Parsely::get_author_names
	 * @uses \Parsely::get_bottom_level_term
	 * @uses \Parsely::get_category_name
	 * @uses \Parsely::get_clean_parsely_page_value
	 * @uses \Parsely::get_coauthor_names
	 * @uses \Parsely::get_current_url
	 * @uses \Parsely::get_first_image
	 * @uses \Parsely::get_options
	 * @uses \Parsely::get_tags
	 * @uses \Parsely::post_has_trackable_status
	 * @uses \Parsely::update_metadata_endpoint
	 * @group metadata
	 */
	public function test_single_page(): void {
		// Setup Parsley object.
		$parsely         = new Parsely();
		$parsely_options = get_option( Parsely::OPTIONS_KEY );

		// Insert a single page.
		$page_id = self::factory()->post->create(
			array(
				'post_type'  => 'page',
				'post_title' => 'Single Page',
				'post_name'  => 'foobar',
			)
		);
		$page    = get_post( $page_id );

		// Make a request to that page to set the global $wp_query object.
		$this->go_to( get_permalink( $page_id ) );

		// Create the structured data for that post.
		$structured_data = $parsely->construct_parsely_metadata( $parsely_options, $page );

		// Check the required properties exist.
		$this->assert_data_has_required_properties( $structured_data );

		// The headline should be the post_title of the Page.
		self::assertEquals( 'Single Page', $structured_data['headline'] );
		self::assertEquals( get_permalink( $page_id ), $structured_data['url'] );
		$this->assertQueryTrue( 'is_page', 'is_singular' );
	}
}
