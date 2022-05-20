// ----- Imports ----- //

import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import {
	background,
	border,
	text,
} from '@guardian/common-rendering/src/editorialPalette';
import type { ArticleFormat } from '@guardian/libs';
import { ArticleDesign, ArticleDisplay, ArticleSpecial } from '@guardian/libs';
import {
	between,
	from,
	headline,
	neutral,
	remSpace,
	textSans,
} from '@guardian/source-foundations';
import HeadlineByline from 'components/HeadlineByline';
import HeadlineTag from 'components/HeadlineTag';
import StarRating from 'components/StarRating';
import { headlineBackgroundColour, headlineTextColour } from 'editorialStyles';
import type { Item } from 'item';
import { getFormat } from 'item';
import type { ReactElement } from 'react';
import { articleWidthStyles, darkModeCss, wideContentWidth } from 'styles';

// ----- Component ----- //

interface Props {
	item: Item;
}

const styles = (format: ArticleFormat): SerializedStyles => {
	const baseStyles = css`
		${headline.small()}
		${headlineTextColour(format)}
		margin: 0;

		${from.tablet} {
			${headline.medium()}
		}
	`;

	switch (format.design) {
		case ArticleDesign.Interview:
			return css`
				${baseStyles}
				padding-bottom: ${remSpace[1]};
			`;
		default:
			return css`
				${baseStyles}
				${articleWidthStyles}
				${headlineBackgroundColour(format)}
				padding-bottom: ${remSpace[6]};
			`;
	}
};

const immersiveStyles = css`
	${headline.small({ fontWeight: 'bold' })}
	font-weight: 700;
	padding: ${remSpace[1]} ${remSpace[3]} ${remSpace[6]} ${remSpace[3]};
	margin: calc(80vh - 5rem) 0 0;
	position: relative;
	display: inline-block;
	min-height: 112px;
	box-sizing: border-box;

	${between.phablet.and.wide} {
		width: ${wideContentWidth}px;
	}

	${from.desktop} {
		${headline.xlarge({ fontWeight: 'bold' })}
		margin-top: calc(80vh - 7rem);
	}

	${from.wide} {
		width: 100%;
		margin-left: calc(
			((100% - ${wideContentWidth}px) / 2) - ${remSpace[3]}
		);
		padding-left: ${remSpace[3]};

		span {
			display: block;
			width: ${wideContentWidth}px;
		}
	}
`;

const analysisStyles = (format: ArticleFormat): SerializedStyles => css`
	${headline.small({ lineHeight: 'regular', fontWeight: 'light' })}

	${from.tablet} {
		${headline.medium({ lineHeight: 'regular', fontWeight: 'light' })}
	}

	span {
		box-shadow: inset 0 -0.025rem ${border.articleLink(format)};
		padding-bottom: 0.2rem;

		${darkModeCss`
            box-shadow: inset 0 -0.025rem ${neutral[46]};
        `}
	}
`;

const mediaStyles = css`
	${headline.small({ fontWeight: 'medium' })}

	${from.tablet} {
		${headline.medium({ fontWeight: 'medium' })}
	}
`;

const featureStyles = css`
	${headline.small({ fontWeight: 'bold' })}

	${from.tablet} {
		${headline.medium({ fontWeight: 'bold' })}
	}
`;

const reviewStyles = css`
	${headline.small({ fontWeight: 'bold' })}

	${from.tablet} {
		${headline.medium({ fontWeight: 'bold' })}
	}
`;

const interviewStyles = css`
	${headline.small({ fontWeight: 'bold' })}
	line-height: 1.25;

	${from.tablet} {
		${headline.medium({ fontWeight: 'bold' })}
		line-height: 1.25;
	}
`;

const commentStyles = css`
	${headline.small({ fontWeight: 'light' })}
	padding-bottom: ${remSpace[1]};

	${from.tablet} {
		${headline.medium({ fontWeight: 'light' })}
	}
`;

const labsStyles = css`
	${textSans.xxxlarge({ lineHeight: 'regular' })}

	${from.desktop} {
		${textSans.xxxlarge({ lineHeight: 'regular' })}
	}
`;

const immersiveLabs = css`
	${textSans.xxxlarge({ lineHeight: 'regular', fontWeight: 'bold' })}
	${from.desktop} {
		${textSans.xxxlarge({ lineHeight: 'regular', fontWeight: 'bold' })}
	}
`;

const liveblogStyles = css`
	padding: 0 0 ${remSpace[5]};
`;

const getStyles = (format: ArticleFormat): SerializedStyles => {
	if (format.display === ArticleDisplay.Immersive) {
		const labs =
			format.theme === ArticleSpecial.Labs ? immersiveLabs : null;
		return css(styles(format), immersiveStyles, labs);
	}

	if (format.theme === ArticleSpecial.Labs) {
		return css(styles(format), labsStyles);
	}

	switch (format.design) {
		case ArticleDesign.Analysis:
			return css(styles(format), analysisStyles(format));
		case ArticleDesign.Feature:
			return css(styles(format), featureStyles);
		case ArticleDesign.Interview:
			return css(styles(format), interviewStyles);
		case ArticleDesign.Editorial:
		case ArticleDesign.Letter:
		case ArticleDesign.Comment:
			return css(styles(format), commentStyles);
		case ArticleDesign.Gallery:
		case ArticleDesign.Audio:
		case ArticleDesign.Video:
			return css(styles(format), mediaStyles);
		case ArticleDesign.Review:
			return css(styles(format), reviewStyles);
		case ArticleDesign.LiveBlog:
		case ArticleDesign.DeadBlog:
			return css(styles(format), liveblogStyles);

		default:
			return css(styles(format));
	}
};

const headlineStyles = (format: ArticleFormat): SerializedStyles => {
	return css`
		color: ${text.headline(format)};
		background-color: ${background.headline(format)};
		position: relative;
		white-space: pre-wrap;
		padding: 0 ${remSpace[3]} ${remSpace[1]};
		display: inline;
		box-decoration-break: clone;

		${from.wide} {
			padding: 0 ${remSpace[2]} ${remSpace[1]};
		}

		${darkModeCss`
			background-color: ${background.headlineDark(format)};
		`};
	`;
};

const interviewHeadlineStyles: SerializedStyles = css`
	padding-left: 0;
	padding-right: ${remSpace[12]};
	position: relative;

	${from.wide} {
		margin: 0 auto;
	}

	${from.phablet} {
		width: 38.75rem;
	}
`;

const Headline = ({ item }: Props): ReactElement => {
	const format = getFormat(item);
	switch (item.design) {
		case ArticleDesign.Interview:
			return (
				<div css={interviewHeadlineStyles}>
					<HeadlineTag tagText="Interview" format={format} />
					<h1 css={getStyles(item)}>
						<span css={headlineStyles(format)}>
							{item.headline}
						</span>
					</h1>

					<HeadlineByline
						bylineHtml={item.bylineHtml}
						format={format}
					/>
				</div>
			);
		default:
			return (
				<h1 css={getStyles(item)}>
					<span>{item.headline}</span>
					<StarRating item={item} />
				</h1>
			);
	}
};

// ----- Exports ----- //

export default Headline;