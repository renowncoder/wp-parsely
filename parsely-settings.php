<?php
/**
 * Settings file
 *
 * Create the settings page for parse.ly
 *
 * @category   Components
 * @package    WordPress
 * @subpackage Parse.ly
 */

/* translators: %s: Plugin version */
$version_string = sprintf( __( 'Version %s', 'wp-parsely' ), $this::VERSION );
?>

<div class="wrap">
	<h2><?php echo esc_html( get_admin_page_title() ); ?> <span id="wp-parsely_version"><?php echo esc_html( $version_string ); ?></span></h2>
	<div id="wp-parsely-react-entrypoint"></div>
	<form name="parsely" method="post" action="options.php">
		<?php settings_fields( $this::OPTIONS_KEY ); ?>
		<?php do_settings_sections( $this::OPTIONS_KEY ); ?>
		<p class="submit">
			<input name="submit" type="submit" class="button-primary"
				value="<?php esc_attr_e( 'Save Changes', 'wp-parsely' ); ?>"/>
		</p>
	</form>
</div>
