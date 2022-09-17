/**
 * External dependencies
 */
 import classnames from 'classnames';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( props ) {

	const { align, content, backgroundColor, textColor, affiliateLink, linkLabel, hasLinkNofollow } = props.attributes;

	// https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
	const blockProps = useBlockProps.save({
		className: classnames( {
			[ `has-text-align-${ align }` ]: align,
		} )
	});

	return (
		<div 
			{ ...blockProps }
			style={ { backgroundColor: backgroundColor } }
		>
			<RichText.Content 
				tagName="p" 
				value={ content } 
				style={ { color: textColor } }
			/>
			<p>
				<a 
					href={ affiliateLink }
					className="affiliate-button"
					rel={ hasLinkNofollow ? "nofollow" : "noopener noreferrer" }
				>
					{ linkLabel }
				</a>
			</p>
		</div>
	);
}