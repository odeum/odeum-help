# ODEUM Help Server

* Global Help Index for all connected apps
* Should have own ticketing system (issue tracker)
* Ability to integrate with Slack through ODEUM Slack Service


## ODEUM Help Server:
WebHouse har behov for en service (server) der kan integreres i ODEUM Code (Web App framework) og senere i ODEUM Code Native (Mobile App framework). 
Denne server er en service der skal tilbyde inline hjælp og indhold til Web Apps der er tilknyttet denne service. En kontekst sensitiv hjælp der vises ved at aktivere "Hjælp" knappen i footer panelet i en ODEUM Code App. 

## Problemstilling:
En Web App udviklet med ODEUM Code kan være en vilkår web app der er skrevet i React og anvender ODEUM Code App framework som platform for sine visuelle primitiver og forretningslogik. En ODEUM Code Web App er opbygget af en lang række React components (komponenter) og nogle af disse komponenter er workspace komponenter der skal kunne have tilknyttet et hjælpe-index (unikt ID) således at der kan hentes en hjælpetekst fra en central server med indhold der skal kunne vises i web app’en. Vedlagt er et visuelt eksempel på hvorledes dette grafisk kunne initieres. 

Der skal udvikles og anvendes følgende teknologier for at løse problemet:
* Et React wrapper component eller JavaScript function der kobler det visuelle workspace sammen med et index i en server. Dette komponent skal skrives i ReactJS (skal senere implementeres i Redux)
* En server service der beskriver og udstiller et API for at få adgang til kontekst-sensitiv hjælp. Denne service skal skrives i NodeJS og kunne afvikles på en webserver med enten Express web server eller Apache. En mulighed for idriftsættelse og operation er WebHouse Amazon AWS miljø
* En database der indeholder index over de web apps der er tilknyttet og et index over de hjælpe-indgange (entries) der er oprettet for den web app der skal bruge hjælp. Database kunne være MongoDB
* En simpel form baseret web app der skal anvendes til at oprette hjælpe indholdet i databasen. Her oprettes det indhold der skal kunne vises som kontekst sensitiv hjælp i en web app bygget med ODEUM Code App framework. Denne web app bygges også i ODEUM Code App framework med React JavaScript. 

## API:
Oplæg til API og datamodel for ODEUM Help Server:

### Help Item (entry):

- app_id: number (uuid for the app using the index/help dictionary)
- help_id: number (uuid)
- help_title: string (short)
- help_description: string (long)
- help_content: { 1-N relation ... 
	- help_media: mediatype, string (url - image, video, svg, animation)
	- help_link: string (link to external ressource, e.g. a support or tutorial website)
	- help_attachments: (url - files ... To be continued)
}

{
	app_id: 1234,
	help_id: 1234,
	help_title: 'Dette er en hjælpe titel',
	help_description: 'Lorem Ipsum Doler Sit Amet ...',
		help_content: {[
			{ type: '', title: '', description: '', url: ''}
			{ type: 'image', image_url: ''},
			{ type: 'image', image_url },
			{ type: 'bla', text: 'Video af lady gaga'}
			{ type: 'video', video_url: ''}
		]}
	}
}
