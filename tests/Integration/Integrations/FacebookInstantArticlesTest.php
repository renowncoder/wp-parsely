<?php
/**
 * Facebook Instant Articles integration tests.
 *
 * @package Parsely\Tests\Integrations
 */

declare(strict_types=1);

namespace Parsely\Tests\Integration\Integrations;

use Parsely;
use Parsely\Integrations\Facebook_Instant_Articles;
use Parsely\Tests\Integration\TestCase;

/**
 * Test Facebook Instant Articles integration.
 */
final class FacebookInstantArticlesTest extends TestCase {
	// This values should mirror the values in `class-facebook-instant-articles.php`
	private const REGISTRY_IDENTIFIER   = 'parsely-analytics-for-wordpress';
	private const REGISTRY_DISPLAY_NAME = 'Parse.ly Analytics';

	/**
	 * Check the integration only happens when a condition is met.
	 *
	 * @covers \Parsely\Integrations\Facebook_Instant_Articles::integrate
	 */
	public function test_integration_only_runs_when_FBIA_plugin_is_active(): void {
		$fbia = new Facebook_Instant_Articles();

		// By default, the integration will not happen if the condition has not been met.
		$fbia->integrate();
		self::assertFalse(
			has_action(
				'instant_articles_compat_registry_analytics',
				array( $fbia, 'insert_parsely_tracking' )
			)
		);

		// Meet the condition, and check again.
		// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedConstantFound -- can't prefix this.
		define( 'IA_PLUGIN_VERSION', '1.2.3' );
		$fbia->integrate();
		self::assertNotFalse(
			has_action(
				'instant_articles_compat_registry_analytics',
				array( $fbia, 'insert_parsely_tracking' )
			)
		);
	}

	/**
	 * Check the Facebook Instant Articles integration.
	 *
	 * @covers \Parsely\Integrations\Facebook_Instant_Articles::insert_parsely_tracking
	 * @covers \Parsely\Integrations\Facebook_Instant_Articles::get_embed_code
	 * @uses \Parsely\Parsely::api_key_is_missing
	 * @uses \Parsely\Parsely::api_key_is_set
	 * @uses \Parsely\Parsely::get_api_key
	 * @uses \Parsely\Parsely::get_options
	 * @group fbia
	 */
	public function test_parsely_is_added_to_FBIA_registry(): void {
		// We use our own registry here, but the integration with the FBIA plugin provides its own.
		$registry = array();
		$fbia     = new Facebook_Instant_Articles();

		// Check for no registration when there is no API key saved.
		$fbia->insert_parsely_tracking( $registry );

		self::assertArrayNotHasKey( self::REGISTRY_IDENTIFIER, $registry );

		// Now set API key.
		$fake_api_key = 'my-api-key.com';
		self::set_options( array( 'apikey' => $fake_api_key ) );

		$fbia->insert_parsely_tracking( $registry );

		self::assertParselyWasAddedToRegistryCorrectly( $registry, $fake_api_key );
	}

	/**
	 * Check registry has the integration identifier as a key, that display name is correct, and payload is correct.
	 *
	 * @param array $registry Representation of Facebook Instant Articles registry.
	 * @param string $api_key  API key.
	 */
	public static function assertParselyWasAddedToRegistryCorrectly( array $registry, string $api_key ): void {
		self::assertArrayHasKey( self::REGISTRY_IDENTIFIER, $registry );
		self::assertSame( self::REGISTRY_DISPLAY_NAME, $registry[ self::REGISTRY_IDENTIFIER ]['name'] );

		// Check embed code contains a script (don't test for specifics), and the API key.
		self::assertStringContainsString( '<script>', $registry[ self::REGISTRY_IDENTIFIER ]['payload'] );
		self::assertStringContainsString( $api_key, $registry[ self::REGISTRY_IDENTIFIER ]['payload'] );
	}
}
