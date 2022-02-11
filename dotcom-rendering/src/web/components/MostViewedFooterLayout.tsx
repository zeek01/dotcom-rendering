import { css } from '@emotion/react';
import { text, headline, from, Breakpoint } from '@guardian/source-foundations';
import { useAB } from '@guardian/ab-react';
import { ArticleDesign } from '@guardian/libs';
import { Hide } from './Hide';
import { LeftColumn } from './LeftColumn';
import { MostViewedFooterData } from './MostViewedFooterData';
import { AdSlot, labelStyles } from './AdSlot';
import { abTestTest } from '../experiments/tests/ab-test-test';
import { decidePalette } from '../lib/decidePalette';

const stackBelow = (breakpoint: Breakpoint) => css`
	display: flex;
	flex-direction: column;

	${from[breakpoint]} {
		flex-direction: row;
	}
`;

const headingStyles = css`
	${headline.xsmall()};
	color: ${text.primary};
	font-weight: 900;
	padding-right: 5px;
	padding-bottom: 14px;
	padding-top: 3px;

	${from.leftCol} {
		${headline.xsmall()};
		font-weight: 900;
	}

	${from.wide} {
		font-weight: 900;
	}
`;

const adSlotUnspecifiedWidth = css`
	.ad-slot {
		margin: 12px auto;
		min-width: 300px;
		min-height: 274px;
		text-align: center;
	}
`;

const mostPopularAdStyle = css`
	.ad-slot--mostpop {
		width: 300px;
		margin: 12px auto;
		min-width: 300px;
		min-height: 274px;
		text-align: center;
		${from.desktop} {
			margin: 0;
			width: auto;
		}
	}
	${labelStyles};
`;

interface Props {
	sectionName?: string;
	format: ArticleFormat;
	ajaxUrl: string;
}

export const MostViewedFooterLayout = ({
	sectionName,
	format,
	ajaxUrl,
}: Props) => {
	// Example usage of AB Tests
	// Used in the Cypress tests as smoke test of the AB tests framework integration
	const ABTestAPI = useAB();
	const abTestCypressDataAttr =
		(ABTestAPI.isUserInVariant('AbTestTest', 'control') &&
			'ab-test-control') ||
		(ABTestAPI.isUserInVariant('AbTestTest', 'variant') &&
			'ab-test-variant') ||
		'ab-test-not-in-test';
	const runnableTest = ABTestAPI.runnableTest(abTestTest);
	const variantFromRunnable =
		(runnableTest && runnableTest.variantToRun.id) || 'not-runnable';

	const palette = decidePalette(format);

	return (
		<div
			data-print-layout="hide"
			className="content-footer"
			css={adSlotUnspecifiedWidth}
		>
			<div
				css={[stackBelow('leftCol'), mostPopularAdStyle]}
				data-link-name="most-popular"
				data-component="most-popular"
				data-cy-ab-user-in-variant={abTestCypressDataAttr}
				data-cy-ab-runnable-test={variantFromRunnable}
			>
				<LeftColumn
					size={
						format.design === ArticleDesign.LiveBlog ||
						format.design === ArticleDesign.DeadBlog
							? 'wide'
							: 'compact'
					}
				>
					<h2 css={headingStyles}>Most popular</h2>
				</LeftColumn>
				{/* We need to respect the side ad slot above desktop. The
					result is that we need to do some mutation here to make
					sure components are stacked at the correct breakpoints.
				*/}
				<section css={stackBelow('desktop')}>
					<div css={stackBelow('leftCol')}>
						<Hide when="above" breakpoint="leftCol">
							<h2 css={headingStyles}>Most popular</h2>
						</Hide>
						<MostViewedFooterData
							sectionName={sectionName}
							palette={palette}
							ajaxUrl={ajaxUrl}
						/>
					</div>
					<div
						css={css`
							margin: 6px 0 0 10px;
						`}
					>
						<AdSlot position="mostpop" display={format.display} />
					</div>
				</section>
			</div>
		</div>
	);
};