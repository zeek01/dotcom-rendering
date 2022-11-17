import { HeaderSingleFrontDoor } from './HeaderSingleFrontDoor';

export default {
	component: HeaderSingleFrontDoor,
	title: 'Components/HeaderSingleFrontDoor',
};

const readerRevenueLinks = {
	contribute:
		'https://support.theguardian.com/contribute?INTCMP=header_support_contribute&acquisitionData=%7B%22source%22:%22GUARDIAN_WEB%22,%22componentType%22:%22ACQUISITIONS_HEADER%22,%22componentId%22:%22header_support_contribute%22%7D',
	subscribe:
		'https://support.theguardian.com/subscribe?INTCMP=header_support_subscribe&acquisitionData=%7B%22source%22:%22GUARDIAN_WEB%22,%22componentType%22:%22ACQUISITIONS_HEADER%22,%22componentId%22:%22header_support_subscribe%22%7D',
	support:
		'https://support.theguardian.com?INTCMP=header_support&acquisitionData=%7B%22source%22:%22GUARDIAN_WEB%22,%22componentType%22:%22ACQUISITIONS_HEADER%22,%22componentId%22:%22header_support%22%7D',
	supporter:
		'https://support.theguardian.com/subscribe?INTCMP=header_supporter_cta&acquisitionData=%7B%22source%22:%22GUARDIAN_WEB%22,%22componentType%22:%22ACQUISITIONS_HEADER%22,%22componentId%22:%22header_supporter_cta%22%7D',
};

export const defaultStory = () => {
	return (
		<HeaderSingleFrontDoor
			editionId="UK"
			idUrl="https://profile.theguardian.com"
			mmaUrl="https://manage.theguardian.com"
			discussionApiUrl="https://discussion.theguardian.com/discussion-api"
			urls={readerRevenueLinks}
			remoteHeader={false}
			contributionsServiceUrl="https://contributions.guardianapis.com"
			idApiUrl="https://idapi.theguardian.com"
		/>

		/*
		<Header
			editionId={front.editionId}
			idUrl={front.config.idUrl}
			mmaUrl={front.config.mmaUrl}
			supporterCTA={
				front.nav.readerRevenueLinks.header.supporter
			}
			discussionApiUrl={front.config.discussionApiUrl}
			urls={front.nav.readerRevenueLinks.header}
			remoteHeader={!!front.config.switches.remoteHeader}
			contributionsServiceUrl="https://contributions.guardianapis.com" // TODO: Pass this in
			idApiUrl="https://idapi.theguardian.com/" // TODO: read this from somewhere as in other layouts
		/>
		*/
	);
};
defaultStory.story = { name: 'default' };