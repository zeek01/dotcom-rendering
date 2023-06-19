// This is for an experiment testing SEO performance on recipes before and
// after structured data is added. If this file is still here on 01/08/22 follow
// up with Ophan on why it hasn't been removed and delete if no good answer.

type EventsSchemaObject = {
	[url: string]: string;
};

export const eventsSchema: EventsSchemaObject = {
	'https://www.theguardian.com/guardian-masterclasses/2023/mar/30/the-60-minute-writing-workout-with-tim-lott': `{
		  "startDate":"2023-06-20T20:00:00+01:00",
		  "endDate":"2023-06-20T21:00:00+01:00",
		  "name":"On-demand: Marina Hyde in conversation with Jonathan Freedland",
		  "url":"https://www.eventbrite.co.uk/e/on-demand-marina-hyde-in-conversation-with-jonathan-freedland-tickets-638002642077",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F516649169%2F104062388105%2F1%2Foriginal.20230517-111601?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C14%2C1200%2C600\u0026s=62d0629d3497eb9c6c7a151bb0042dd1",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2023-06-20T20:00:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/on-demand-marina-hyde-in-conversation-with-jonathan-freedland-tickets-638002642077",
			  "lowPrice":8.9,
			  "highPrice":16.2,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-06-01T18:00:00Z",
			  "validFrom":"2023-06-01T18:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-06-20T20:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/on-demand-marina-hyde-in-conversation-with-jonathan-freedland-tickets-638002642077",
			  "price":8.9,
			  "@type":"Offer",
			  "availabilityStarts":"2023-06-01T18:00:00Z",
			  "validFrom":"2023-06-01T18:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-06-20T20:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/on-demand-marina-hyde-in-conversation-with-jonathan-freedland-tickets-638002642077",
			  "price":13.08,
			  "@type":"Offer",
			  "availabilityStarts":"2023-06-01T18:00:00Z",
			  "validFrom":"2023-06-01T18:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-06-20T20:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/on-demand-marina-hyde-in-conversation-with-jonathan-freedland-tickets-638002642077",
			  "price":16.2,
			  "@type":"Offer",
			  "availabilityStarts":"2023-06-01T18:00:00Z",
			  "validFrom":"2023-06-01T18:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"url":"https://www.eventbrite.co.uk/e/on-demand-marina-hyde-in-conversation-with-jonathan-freedland-tickets-638002642077",
			"@type":"VirtualLocation"
		  },
		  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"Event",
		  "description":"On 1 June Marina Hyde joined Jonathan Freedland live on stage in London."
		}`,
	'https://www.theguardian.com/guardian-masterclasses/2022/may/04/understanding-the-climate-crisis-a-three-week-course-with-professor-mark-maslin': `{
		  "startDate":"2023-06-21T20:00:00+01:00",
		  "endDate":"2023-06-21T21:00:00+01:00",
		  "name":"In conversation with Lorrie Moore",
		  "url":"https://www.eventbrite.co.uk/e/in-conversation-with-lorrie-moore-tickets-598319829717",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F476818509%2F748063825453%2F1%2Foriginal.20230324-105409?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C289%2C3952%2C1976\u0026s=f5385f500bd7c06efda9194cd054e837",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2023-06-21T19:00:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/in-conversation-with-lorrie-moore-tickets-598319829717",
			  "lowPrice":11.06,
			  "highPrice":25.69,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-03-22T00:00:00Z",
			  "validFrom":"2023-03-22T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-06-21T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/in-conversation-with-lorrie-moore-tickets-598319829717",
			  "price":11.06,
			  "@type":"Offer",
			  "availabilityStarts":"2023-03-22T00:00:00Z",
			  "validFrom":"2023-03-22T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-06-21T19:00:00Z",
			  "name":"Book + ticket (UK residents only)",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/in-conversation-with-lorrie-moore-tickets-598319829717",
			  "price":25.69,
			  "@type":"Offer",
			  "availabilityStarts":"2023-03-22T00:00:00Z",
			  "validFrom":"2023-03-22T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-06-21T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/in-conversation-with-lorrie-moore-tickets-598319829717",
			  "price":16.28,
			  "@type":"Offer",
			  "availabilityStarts":"2023-03-22T00:00:00Z",
			  "validFrom":"2023-03-22T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-06-21T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/in-conversation-with-lorrie-moore-tickets-598319829717",
			  "price":21.51,
			  "@type":"Offer",
			  "availabilityStarts":"2023-03-22T00:00:00Z",
			  "validFrom":"2023-03-22T00:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"url":"https://www.eventbrite.co.uk/e/in-conversation-with-lorrie-moore-tickets-598319829717",
			"@type":"VirtualLocation"
		  },
		  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"Event",
		  "description":"Lorrie Moore, the bestselling author and short story writer, will join us to discuss her new novel, I Am Homeless If This Is Not My Home."
		}`,
	'https://www.theguardian.com/guardian-masterclasses/2023/mar/30/beyond-the-snapshot-a-masterclass-in-travel-photography-with-anthony-epes': `{
		  "startDate":"2023-07-03T20:00:00+01:00",
		  "endDate":"2023-07-03T21:00:00+01:00",
		  "name":"Guardian Newsroom: 75 years of the NHS",
		  "url":"https://www.eventbrite.co.uk/e/guardian-newsroom-75-years-of-the-nhs-tickets-648990466957",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F527847509%2F748063825453%2F1%2Foriginal.20230602-134708?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=1%2C296%2C1990%2C995\u0026s=62fcc328f902c27013bcdc396277ee44",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2023-07-03T19:00:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/guardian-newsroom-75-years-of-the-nhs-tickets-648990466957",
			  "lowPrice":11.06,
			  "highPrice":21.51,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-05-30T23:00:00Z",
			  "validFrom":"2023-05-30T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-03T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/guardian-newsroom-75-years-of-the-nhs-tickets-648990466957",
			  "price":11.06,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-31T00:00:00Z",
			  "validFrom":"2023-05-31T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-03T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/guardian-newsroom-75-years-of-the-nhs-tickets-648990466957",
			  "price":16.28,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-31T00:00:00Z",
			  "validFrom":"2023-05-31T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-03T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/guardian-newsroom-75-years-of-the-nhs-tickets-648990466957",
			  "price":21.51,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-30T23:00:00Z",
			  "validFrom":"2023-05-30T23:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"url":"https://www.eventbrite.co.uk/e/guardian-newsroom-75-years-of-the-nhs-tickets-648990466957",
			"@type":"VirtualLocation"
		  },
		  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"Event",
		  "description":"Join Denis Campbell and an expert panel for a livestreamed event, as they mark the 75th anniversary of the NHS, and explore its future."
		}`,
	'https://www.theguardian.com/guardian-masterclasses/2015/jul/06/food-writing-with-felicity-cloake-food-and-drink-journalism-course': `{
			  "startDate":"2023-07-05T18:00:00+01:00",
			  "endDate":"2023-07-05T19:00:00+01:00",
			  "name":"Rethinking economics: It\u2019s not business as usual",
			  "url":"https://www.eventbrite.co.uk/e/rethinking-economics-its-not-business-as-usual-tickets-643673463657",
			  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F534191009%2F104062388105%2F1%2Foriginal.20230612-160108?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C0%2C2160%2C1080\u0026s=74e4783e9d11c2b74ff8b01facda308c",
			  "eventStatus":"https://schema.org/EventScheduled",
			  "offers":[
				{
				  "availabilityEnds":"2023-07-05T17:00:00Z",
				  "priceCurrency":"GBP",
				  "url":"https://www.eventbrite.co.uk/e/rethinking-economics-its-not-business-as-usual-tickets-643673463657",
				  "lowPrice":5.83,
				  "highPrice":5.83,
				  "@type":"AggregateOffer",
				  "availabilityStarts":"2023-06-01T19:00:00Z",
				  "validFrom":"2023-06-01T19:00:00Z",
				  "availability":"InStock"
				},
				{
				  "availabilityEnds":"2023-07-05T17:00:00Z",
				  "name":"Pay what you can",
				  "priceCurrency":"GBP",
				  "url":"https://www.eventbrite.co.uk/e/rethinking-economics-its-not-business-as-usual-tickets-643673463657",
				  "price":5.83,
				  "@type":"Offer",
				  "availabilityStarts":"2023-06-01T19:00:00Z",
				  "validFrom":"2023-06-01T19:00:00Z",
				  "availability":"InStock"
				},
				{
				  "availabilityEnds":"2023-07-05T17:00:00Z",
				  "name":"Know Your Place by Faiza Shaheen",
				  "priceCurrency":"GBP",
				  "url":"https://www.eventbrite.co.uk/e/rethinking-economics-its-not-business-as-usual-tickets-643673463657",
				  "price":14.51,
				  "@type":"Offer",
				  "availabilityStarts":"2023-06-11T23:00:00Z",
				  "validFrom":"2023-06-11T23:00:00Z",
				  "availability":"InStock"
				}],
			  "location":{
				"url":"https://www.eventbrite.co.uk/e/rethinking-economics-its-not-business-as-usual-tickets-643673463657",
				"@type":"VirtualLocation"
			  },
			  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
			  "@context":"http://schema.org",
			  "organizer":{
				"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
				"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
				"@type":"Organization",
				"name":"The Guardian Live"
			  },
			  "@type":"Event",
			  "description":"Join us for a special event looking at new economic ideas, livestreamed from Manchester as part of Manchester International Festival."
			}`,
	'https://www.theguardian.com/guardian-masterclasses/2020/dec/16/persuasive-writing-to-build-your-brand-a-two-part-bootcamp-barnaby-benson-business-course': `{
				  "startDate":"2023-07-06T20:00:00+01:00",
				  "endDate":"2023-07-06T21:00:00+01:00",
				  "name":"Balmy Army: How do we create a movement for mental health?",
				  "url":"https://www.eventbrite.co.uk/e/balmy-army-how-do-we-create-a-movement-for-mental-health-tickets-643556273137",
				  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F534195829%2F104062388105%2F1%2Foriginal.20230612-160601?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C0%2C2160%2C1080\u0026s=05ca0f8706cef45e180e5553d9429669",
				  "eventStatus":"https://schema.org/EventScheduled",
				  "offers":[
					{
					  "availabilityEnds":"2023-07-06T19:00:00Z",
					  "priceCurrency":"GBP",
					  "url":"https://www.eventbrite.co.uk/e/balmy-army-how-do-we-create-a-movement-for-mental-health-tickets-643556273137",
					  "lowPrice":5.83,
					  "highPrice":5.83,
					  "@type":"AggregateOffer",
					  "availabilityStarts":"2023-05-24T00:00:00Z",
					  "validFrom":"2023-05-24T00:00:00Z",
					  "availability":"InStock"
					},
					{
					  "availabilityEnds":"2023-07-06T19:00:00Z",
					  "name":"Pay what you can",
					  "priceCurrency":"GBP",
					  "url":"https://www.eventbrite.co.uk/e/balmy-army-how-do-we-create-a-movement-for-mental-health-tickets-643556273137",
					  "price":5.83,
					  "@type":"Offer",
					  "availabilityStarts":"2023-05-24T00:00:00Z",
					  "validFrom":"2023-05-24T00:00:00Z",
					  "availability":"InStock"
					}],
				  "location":{
					"url":"https://www.eventbrite.co.uk/e/balmy-army-how-do-we-create-a-movement-for-mental-health-tickets-643556273137",
					"@type":"VirtualLocation"
				  },
				  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
				  "@context":"http://schema.org",
				  "organizer":{
					"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
					"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
					"@type":"Organization",
					"name":"The Guardian Live"
				  },
				  "@type":"Event",
				  "description":"Join us for a special event looking at mental health, livestreamed from Manchester as part of Manchester International Festival."
				}`,
	'https://www.theguardian.com/guardian-masterclasses/2023/mar/22/60-minute-masterclass-a-guide-to-sustainable-investing-with-professor-alex-edmans': `{
				  "startDate":"2023-07-24T20:00:00+01:00",
				  "endDate":"2023-07-24T21:00:00+01:00",
				  "name":"Simon Schama: Pandemics, Vaccines and the Health of Nations",
				  "url":"https://www.eventbrite.co.uk/e/simon-schama-pandemics-vaccines-and-the-health-of-nations-tickets-633915607647",
				  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F512640269%2F158700253518%2F1%2Foriginal.20230511-112432?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C323%2C2848%2C1424\u0026s=a54816823158ef9a888aef3b15132a2b",
				  "eventStatus":"https://schema.org/EventScheduled",
				  "offers":[
					{
					  "availabilityEnds":"2023-07-24T19:00:00Z",
					  "priceCurrency":"GBP",
					  "url":"https://www.eventbrite.co.uk/e/simon-schama-pandemics-vaccines-and-the-health-of-nations-tickets-633915607647",
					  "lowPrice":11.06,
					  "highPrice":23.08,
					  "@type":"AggregateOffer",
					  "availabilityStarts":"2023-05-06T23:00:00Z",
					  "validFrom":"2023-05-06T23:00:00Z",
					  "availability":"InStock"
					},
					{
					  "availabilityEnds":"2023-07-24T19:00:00Z",
					  "name":"Pay what you can",
					  "priceCurrency":"GBP",
					  "url":"https://www.eventbrite.co.uk/e/simon-schama-pandemics-vaccines-and-the-health-of-nations-tickets-633915607647",
					  "price":11.06,
					  "@type":"Offer",
					  "availabilityStarts":"2023-05-06T23:00:00Z",
					  "validFrom":"2023-05-06T23:00:00Z",
					  "availability":"InStock"
					},
					{
					  "availabilityEnds":"2023-07-24T19:00:00Z",
					  "name":"Book + ticket (UK residents only)",
					  "priceCurrency":"GBP",
					  "url":"https://www.eventbrite.co.uk/e/simon-schama-pandemics-vaccines-and-the-health-of-nations-tickets-633915607647",
					  "price":23.08,
					  "@type":"Offer",
					  "availabilityStarts":"2023-05-06T23:00:00Z",
					  "validFrom":"2023-05-06T23:00:00Z",
					  "availability":"InStock"
					},
					{
					  "availabilityEnds":"2023-07-24T19:00:00Z",
					  "name":"Pay what you can",
					  "priceCurrency":"GBP",
					  "url":"https://www.eventbrite.co.uk/e/simon-schama-pandemics-vaccines-and-the-health-of-nations-tickets-633915607647",
					  "price":16.28,
					  "@type":"Offer",
					  "availabilityStarts":"2023-05-06T23:00:00Z",
					  "validFrom":"2023-05-06T23:00:00Z",
					  "availability":"InStock"
					},
					{
					  "availabilityEnds":"2023-07-24T19:00:00Z",
					  "name":"Pay what you can",
					  "priceCurrency":"GBP",
					  "url":"https://www.eventbrite.co.uk/e/simon-schama-pandemics-vaccines-and-the-health-of-nations-tickets-633915607647",
					  "price":21.51,
					  "@type":"Offer",
					  "availabilityStarts":"2023-05-06T23:00:00Z",
					  "validFrom":"2023-05-06T23:00:00Z",
					  "availability":"InStock"
					}],
				  "location":{
					"url":"https://www.eventbrite.co.uk/e/simon-schama-pandemics-vaccines-and-the-health-of-nations-tickets-633915607647",
					"@type":"VirtualLocation"
				  },
				  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
				  "@context":"http://schema.org",
				  "organizer":{
					"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
					"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
					"@type":"Organization",
					"name":"The Guardian Live"
				  },
				  "@type":"Event",
				  "description":"Simon Schama, the historian and award-winning author, will join us for a special livestreamed event to introduce his new book."
				}`,
	'https://www.theguardian.com/guardian-masterclasses/2020/jul/24/data-visualisation-a-one-day-bootcamp-adam-frost-tobias-sturt-infographics-business-skills': `{
		  "startDate":"2023-07-26T20:00:00+01:00",
		  "endDate":"2023-07-26T21:00:00+01:00",
		  "name":"Lenny Henry meets Romesh Ranganathan: Livestreamed",
		  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-livestreamed-tickets-640565246897",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F525186439%2F748063825453%2F1%2Foriginal.20230530-141313?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C37%2C1200%2C600\u0026s=f90fa0ea3613f5872342948b292c38cc",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2023-07-26T20:00:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-livestreamed-tickets-640565246897",
			  "lowPrice":11.06,
			  "highPrice":21.51,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-05-19T23:00:00Z",
			  "validFrom":"2023-05-19T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-26T20:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-livestreamed-tickets-640565246897",
			  "price":11.06,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-20T00:00:00Z",
			  "validFrom":"2023-05-20T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-26T19:00:00Z",
			  "name":"Book + ticket (UK residents only)",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-livestreamed-tickets-640565246897",
			  "price":20.46,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-19T23:00:00Z",
			  "validFrom":"2023-05-19T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-26T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-livestreamed-tickets-640565246897",
			  "price":16.28,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-19T23:00:00Z",
			  "validFrom":"2023-05-19T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-26T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-livestreamed-tickets-640565246897",
			  "price":21.51,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-19T23:00:00Z",
			  "validFrom":"2023-05-19T23:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-livestreamed-tickets-640565246897",
			"@type":"VirtualLocation"
		  },
		  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"Event",
		  "description":"Comedians Lenny Henry and Romesh Ranganathan will join us for a special event, live in person and via livestream."
		}`,
	'https://www.theguardian.com/guardian-masterclasses/2019/oct/30/a-morning-at-the-victoria-and-albert-museum-with-jonathan-jones': `{
		  "startDate":"2023-07-26T20:00:00+01:00",
		  "endDate":"2023-07-26T21:00:00+01:00",
		  "name":"Lenny Henry meets Romesh Ranganathan: Live at Alexandra Palace",
		  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-live-at-alexandra-palace-tickets-634586293687",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F525201869%2F241552224791%2F1%2Foriginal.20230530-142928?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C31%2C1200%2C600\u0026s=742a28bd7228972510826b45ee0857c8",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2023-07-26T18:30:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-live-at-alexandra-palace-tickets-634586293687",
			  "lowPrice":21.51,
			  "highPrice":23.61,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-05-29T23:00:00Z",
			  "validFrom":"2023-05-29T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-26T18:30:00Z",
			  "name":"In-person event ticket",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-live-at-alexandra-palace-tickets-634586293687",
			  "price":0,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-29T23:00:00Z",
			  "validFrom":"2023-05-29T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-26T18:30:00Z",
			  "name":"In-person concession ticket",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-live-at-alexandra-palace-tickets-634586293687",
			  "price":0,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-29T23:00:00Z",
			  "validFrom":"2023-05-29T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-26T18:30:00Z",
			  "name":"Lenny Henry's book: Rising to the Surface",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/lenny-henry-meets-romesh-ranganathan-live-at-alexandra-palace-tickets-634586293687",
			  "price":8.96,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-30T23:00:00Z",
			  "validFrom":"2023-05-30T23:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"address":{
			  "addressCountry":"GB",
			  "addressLocality":"London",
			  "addressRegion":"",
			  "streetAddress":"Alexandra Palace Way, London, N22 7AY",
			  "postalCode":"N22 7AY",
			  "@type":"PostalAddress"
			},
			"@type":"Place",
			"name":"Alexandra Palace Theatre"
		  },
		  "eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"Event",
		  "description":"Comedians Lenny Henry and Romesh Ranganathan will join us for a special event, live in person and via livestream."
		}`,
	'https://www.theguardian.com/guardian-masterclasses/2023/mar/29/how-to-be-a-brilliant-speaker-a-masterclass-with-viv-groskop': `{
		  "startDate":"2023-07-27T20:00:00+01:00",
		  "endDate":"2023-07-27T21:00:00+01:00",
		  "name":"Gina Martin: No Offence, But...",
		  "url":"https://www.eventbrite.co.uk/e/gina-martin-no-offence-but-tickets-651782698597",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F530133429%2F1262683492043%2F1%2Foriginal.20230606-115814?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C669%2C4000%2C2000\u0026s=c3dc398f8ad202b2d99d3bf435ff2581",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2024-07-27T19:00:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/gina-martin-no-offence-but-tickets-651782698597",
			  "lowPrice":11.06,
			  "highPrice":24.97,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-05-20T23:00:00Z",
			  "validFrom":"2023-05-20T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2024-07-27T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/gina-martin-no-offence-but-tickets-651782698597",
			  "price":11.06,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-20T23:00:00Z",
			  "validFrom":"2023-05-20T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-27T19:00:00Z",
			  "name":"Book + ticket (UK residents only)",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/gina-martin-no-offence-but-tickets-651782698597",
			  "price":24.97,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-20T23:00:00Z",
			  "validFrom":"2023-05-20T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-27T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/gina-martin-no-offence-but-tickets-651782698597",
			  "price":16.28,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-20T23:00:00Z",
			  "validFrom":"2023-05-20T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-07-27T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/gina-martin-no-offence-but-tickets-651782698597",
			  "price":21.51,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-20T23:00:00Z",
			  "validFrom":"2023-05-20T23:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"url":"https://www.eventbrite.co.uk/e/gina-martin-no-offence-but-tickets-651782698597",
			"@type":"VirtualLocation"
		  },
		  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"EducationEvent",
		  "description":"Gina Martin, the gender equality campaigner, speaker and writer, joins us on the publication day of her new book, No Offence, But \u2026"
		}`,
	'https://www.theguardian.com/guardian-masterclasses/2020/mar/06/how-to-find-your-voice-as-a-writer-with-aditya-chakrabortty': `{
		  "startDate":"2023-09-19T20:00:00+01:00",
		  "endDate":"2023-09-19T21:00:00+01:00",
		  "name":"Mick Herron: The Secret Hours",
		  "url":"https://www.eventbrite.co.uk/e/mick-herron-the-secret-hours-tickets-637398836077",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F515930819%2F1262683492043%2F1%2Foriginal.20230516-153037?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=0%2C116%2C4092%2C2046\u0026s=d156e658a6a51ae32b1427f6a3f14b80",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2024-09-19T19:00:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mick-herron-the-secret-hours-tickets-637398836077",
			  "lowPrice":11.06,
			  "highPrice":28.84,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-05-02T23:00:00Z",
			  "validFrom":"2023-05-02T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2024-09-19T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mick-herron-the-secret-hours-tickets-637398836077",
			  "price":11.06,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-02T23:00:00Z",
			  "validFrom":"2023-05-02T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-09-19T19:00:00Z",
			  "name":"Book + ticket (UK residents only)",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mick-herron-the-secret-hours-tickets-637398836077",
			  "price":28.84,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-02T23:00:00Z",
			  "validFrom":"2023-05-02T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-09-19T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mick-herron-the-secret-hours-tickets-637398836077",
			  "price":16.28,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-02T23:00:00Z",
			  "validFrom":"2023-05-02T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-09-19T19:00:00Z",
			  "name":"Pay what you can",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mick-herron-the-secret-hours-tickets-637398836077",
			  "price":21.51,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-02T23:00:00Z",
			  "validFrom":"2023-05-02T23:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"url":"https://www.eventbrite.co.uk/e/mick-herron-the-secret-hours-tickets-637398836077",
			"@type":"VirtualLocation"
		  },
		  "eventAttendanceMode":"https://schema.org/OnlineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"EducationEvent",
		  "description":"Mick Herron, creator of the Slough House series, will introduce his new spy thriller, The Secret Hours, in a livestreamed event."
		}`,
	'https://www.theguardian.com/guardian-masterclasses/2019/sep/05/long-form-journalism-a-one-day-workshop-with-guardian-writer-samanth-subramanian-journalism-course': `{
		  "startDate":"2023-10-18T19:00:00+01:00",
		  "endDate":"2023-10-18T20:30:00+01:00",
		  "name":"Mary Beard on the emperors of Rome",
		  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
		  "image":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F526873899%2F748063825453%2F1%2Foriginal.20230601-103247?w=1000\u0026auto=format%2Ccompress\u0026q=75\u0026sharp=10\u0026rect=18%2C690%2C5166%2C2583\u0026s=75b75a37d808c2edbaacab484bcab967",
		  "eventStatus":"https://schema.org/EventScheduled",
		  "offers":[
			{
			  "availabilityEnds":"2023-10-18T19:00:00Z",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
			  "lowPrice":11.06,
			  "highPrice":49.75,
			  "@type":"AggregateOffer",
			  "availabilityStarts":"2023-05-30T23:00:00Z",
			  "validFrom":"2023-05-30T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-10-18T19:00:00Z",
			  "name":"Online ticket",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
			  "price":11.06,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-30T23:00:00Z",
			  "validFrom":"2023-05-30T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-10-18T19:00:00Z",
			  "name":"In-person event ticket",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
			  "price":26.74,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-31T00:00:00Z",
			  "validFrom":"2023-05-31T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-10-18T19:00:00Z",
			  "name":"In-person event ticket + book",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
			  "price":49.75,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-30T23:00:00Z",
			  "validFrom":"2023-05-30T23:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-10-18T19:00:00Z",
			  "name":"Online ticket + book (UK residents only)",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
			  "price":36.15,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-31T00:00:00Z",
			  "validFrom":"2023-05-31T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-10-18T19:00:00Z",
			  "name":"In-person concession ticket",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
			  "price":24.13,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-31T00:00:00Z",
			  "validFrom":"2023-05-31T00:00:00Z",
			  "availability":"InStock"
			},
			{
			  "availabilityEnds":"2023-10-18T19:00:00Z",
			  "name":"In-person concession + book",
			  "priceCurrency":"GBP",
			  "url":"https://www.eventbrite.co.uk/e/mary-beard-on-the-emperors-of-rome-tickets-647955009877",
			  "price":47.13,
			  "@type":"Offer",
			  "availabilityStarts":"2023-05-31T00:00:00Z",
			  "validFrom":"2023-05-31T00:00:00Z",
			  "availability":"InStock"
			}],
		  "location":{
			"address":{
			  "addressCountry":"GB",
			  "addressLocality":"Manchester",
			  "addressRegion":"Greater Manchester",
			  "streetAddress":"124 Oxford Road, Manchester, M13 9RD",
			  "postalCode":"M13 9RD",
			  "@type":"PostalAddress"
			},
			"@type":"Place",
			"name":"The Royal Northern College of Music"
		  },
		  "eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode",
		  "@context":"http://schema.org",
		  "organizer":{
			"url":"https://www.eventbrite.co.uk/o/the-guardian-live-6693856275",
			"description":"Guardian Live is a programme of discussions, debates, interviews, keynote speeches and festivals featuring Guardian journalists, politicians, authors, musicians, thought-leaders and more.",
			"@type":"Organization",
			"name":"The Guardian Live"
		  },
		  "@type":"EducationEvent",
		  "description":"Join us for an evening with the celebrated historian and broadcaster - live in Manchester or via the livestream."
		}`,
};
