import { css } from '@emotion/react';
import { from, headline, space, textSans } from '@guardian/source-foundations';
import { decidePalette } from '../lib/decidePalette';
import { FilterButton } from './FilterButton.importable';

type Props = {
	availableTopics: Topic[];
	selectedTopics?: string;
	format: ArticleFormat;
	filterKeyEvents: boolean;
	keyEvents?: Block[];
	id: 'key-events-carousel-desktop' | 'key-events-carousel-mobile';
};

const containerStyles = css`
	padding: ${space[3]}px 0;
	width: 100%;
`;
const headlineStyles = css`
	${headline.xxxsmall({ fontWeight: 'bold', lineHeight: 'tight' })}
	padding-bottom: ${space[3]}px;
`;

const headlineAccentStyles = css`
	${textSans.small({ fontWeight: 'regular', lineHeight: 'tight' })};
`;

const betaTextStyles = (palette: Palette) => css`
	color: ${palette.text.keyEvent};
`;

const topicStyles = css`
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: wrap;
	column-gap: ${space[2]}px;
	row-gap: ${space[2]}px;
	${from.desktop} {
		flex-direction: column;
		flex-wrap: nowrap;
		column-gap: 0;
	}
`;

const handleTopicClick = (
	isActive: boolean,
	buttonParams: string,
	id: string,
) => {
	const urlParams = new URLSearchParams(window.location.search);

	if (!isActive) {
		urlParams.set('topics', buttonParams);
	} else {
		urlParams.delete('topics');
	}
	urlParams.delete('page'); // direct to the first page
	urlParams.delete('filterKeyEvents');

	window.location.hash = id;
	window.location.search = urlParams.toString();
};

const handleKeyEventClick = (filterKeyEvents: boolean, id: string) => {
	const urlParams = new URLSearchParams(window.location.search);

	urlParams.set('filterKeyEvents', filterKeyEvents ? 'false' : 'true');
	urlParams.delete('page'); // direct to the first page
	urlParams.delete('topics');

	window.location.hash = id;
	window.location.search = urlParams.toString();
};

export const TopicFilterBank = ({
	availableTopics,
	selectedTopics,
	format,
	keyEvents,
	filterKeyEvents = false,
	id,
}: Props) => {
	const palette = decidePalette(format);
	return (
		<div css={containerStyles}>
			<div css={headlineStyles}>
				Filters{' '}
				<span css={headlineAccentStyles}>
					(<span css={betaTextStyles(palette)}>BETA</span>):
				</span>
			</div>

			<div css={topicStyles}>
				{keyEvents?.length && (
					<FilterButton
						value={'Key Events'}
						count={keyEvents.length}
						format={format}
						isActive={filterKeyEvents}
						onClick={() => {
							handleKeyEventClick(filterKeyEvents, id);
						}}
					/>
				)}

				{availableTopics.slice(0, 5).map((topic) => {
					const buttonParams = `${topic.type}:${topic.value}`;
					const isActive = selectedTopics
						? selectedTopics.includes(buttonParams)
						: false;

					return (
						<FilterButton
							value={topic.value}
							type={topic.type}
							count={topic.count}
							format={format}
							isActive={isActive}
							onClick={() =>
								handleTopicClick(isActive, buttonParams, id)
							}
						/>
					);
				})}
			</div>
		</div>
	);
};