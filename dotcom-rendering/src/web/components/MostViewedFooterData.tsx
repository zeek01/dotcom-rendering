import { css } from '@emotion/react';

import { border, from, Breakpoint } from '@guardian/source-foundations';

import { useApi } from '../lib/useApi';
import { joinUrl } from '../../lib/joinUrl';
import { decideTrail } from '../lib/decideTrail';

import { MostViewedFooterGrid } from './MostViewedFooterGrid';
import { MostViewedFooterSecondTierItem } from './MostViewedFooterSecondTierItem';

type Props = {
	sectionName?: string;
	palette: Palette;
	ajaxUrl: string;
};

const stackBelow = (breakpoint: Breakpoint) => css`
	display: flex;
	flex-direction: column;

	${from[breakpoint]} {
		flex-direction: row;
	}
`;

const secondTierStyles = css`
	border-left: 1px solid ${border.secondary};
	border-right: 1px solid ${border.secondary};

	${from.tablet} {
		padding-top: 24px;
	}
`;

function buildSectionUrl(ajaxUrl: string, sectionName?: string) {
	const sectionsWithoutPopular = ['info', 'global'];
	const hasSection =
		sectionName && !sectionsWithoutPopular.includes(sectionName);
	const endpoint: string = `/most-read${
		hasSection ? `/${sectionName}` : ''
	}.json`;
	return joinUrl([ajaxUrl, `${endpoint}?dcr=true`]);
}

function transformTabs(tabs: CAPITrailTabType[]): TrailTabType[] {
	return tabs.map((tab) => ({
		...tab,
		trails: tab.trails.map((trail) => decideTrail(trail)),
	}));
}

export const MostViewedFooterData = ({
	sectionName,
	palette,
	ajaxUrl,
}: Props) => {
	const url = buildSectionUrl(ajaxUrl, sectionName);
	const { data, error } = useApi<
		MostViewedFooterPayloadType | CAPITrailTabType[]
	>(url);

	if (error) {
		window.guardian.modules.sentry.reportError(error, 'most-viewed-footer');
		return null;
	}

	if (data) {
		const tabs = 'tabs' in data ? data.tabs : data;
		return (
			<div
				css={css`
					width: 100%;
				`}
				data-cy="mostviewed-footer"
			>
				<MostViewedFooterGrid
					data={transformTabs(tabs)}
					sectionName={sectionName}
					palette={palette}
				/>
				<div css={[stackBelow('tablet'), secondTierStyles]}>
					{'mostCommented' in data && (
						<MostViewedFooterSecondTierItem
							trail={decideTrail(data.mostCommented)}
							title="Most commented"
							dataLinkName="comment | group-0 | card-@1" // To match Frontend
							showRightBorder={true}
						/>
					)}
					{'mostShared' in data && (
						<MostViewedFooterSecondTierItem
							trail={decideTrail(data.mostShared)}
							dataLinkName="news | group-0 | card-@1" // To match Frontend
							title="Most shared"
						/>
					)}
				</div>
			</div>
		);
	}

	return null;
};