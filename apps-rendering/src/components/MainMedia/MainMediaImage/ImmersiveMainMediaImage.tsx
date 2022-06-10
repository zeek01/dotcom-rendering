import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import Img from '@guardian/common-rendering/src/components/img';
import type { Sizes } from '@guardian/common-rendering/src/sizes';
import type { ArticleFormat } from '@guardian/libs';
import { some } from '@guardian/types';
import type { Image } from 'image';
import type { FC } from 'react';
import { Caption } from './MainMediaImage.defaults';

const captionId = 'header-image-caption';

const imgStyles = css`
	display: block;
	height: 80vh;
	object-fit: cover;
	width: 100vw;
`;

const styles = css`
	margin: 0;
	position: absolute;
	left: 0;
`;

const getSizes = (image: Image): Sizes => ({
	mediaQueries: [],
	default: `${(100 * image.width) / image.height}vh `,
});

interface Props {
	image: Image;
	className?: SerializedStyles;
	format: ArticleFormat;
}

// NOTE: This component isn't currently used - this file exists to preserve
// immersive styling and sizes so we don't lose them in the big MainMedia refactor.
const ImmersiveMainMediaImage: FC<Props> = ({ className, image, format }) => (
	<figure css={[styles, className]} aria-labelledby={captionId}>
		<Img
			image={image}
			sizes={getSizes(image)}
			className={some(imgStyles)}
			format={format}
			supportsDarkMode
			lightbox={some({
				className: 'js-launch-slideshow',
				caption: image.nativeCaption,
				credit: image.credit,
			})}
		/>
		<Caption format={format} image={image} />
	</figure>
);

export default ImmersiveMainMediaImage;