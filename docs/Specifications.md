# ODEUM Help

* Global Help Index for all connected apps
* Should long term have its own ticketing system (issue tracker)
* Ability to integrate with Slack through ODEUM Slack Service


## ODEUM Help
ODEUM Code will require a help client and a help server. The help server service will be integrated through a client React Wrapper component in ODEUM Code (Web App framework) and later in ODEUM Code Native (Mobile App framework). 

The server is a service (API) that exhibits and offer inline help and content for ODEUM Code Web Apps connected to this service. A context sensitive help displayed through a pop-up overlay by activating the "Help" button in the lower right corner of the footer in an  ODEUM Code Web App. 

## Problem
A Web App developed with ODEUM Code can be any arbitrary web app written in React using the ODEUM Code App framework as a platform for its visual primities and business logic. An ODEUM Code Web App is composed of a number of React components, and some of these components are workspace components that needs context sensitive help connected. The component will wrap a unique ID from a database thus getting access to a specific help entry from a central help repository returning content to be visualized in the web app.

#### Following technologies will be used to solve the problem:

* A React wrapper component or JavaScript function that connects the visual workspace with an index in the server. This component will use native React state (Will be implemented in Redux later if needed)
* A NodeJS server service that describes and exhibits an API and CRUD endpoints to access context sensitive help from a MongoDB database. This service is written in NodeJS and driven by either Express or Apache web server. 
* A MongoDB database containing a localized index of web apps connected to the help and an index of the help entries created for the web app seeking help.
* A simple form based ODEUM Code Web App applied to create help content in the database for a specific web app. 

## API

```js
- locale: string (help content locale)
	- app_id: number (uuid for the app using the index/help dictionary)
	- help_id: number (uuid)
	- help_title: string (short)
	- help_description: string (long)
	- help_content: { 1-N relation ... 
		- help_media: mediatype, string (url - image, video, svg, animation)
		- help_link: string (link to external ressource, e.g. a support or tutorial website)
		- help_attachments: (url - files ...)
}
```

## Help item JavaScript object example
```js
{
	app_id: 1,
	help_id: 1234,
	locale: 'en',
	{
		help_title: 'This is the title of the help entry',
		help_description: 'This is the description of the help entry',
		help_content: {[
			{ type: 'text', title: '', description: '', style: { ... }},
			{ type: 'image', title: '', description: '', url: '', style: { ... }},
			{ type: 'image', title: '', description: '', url: '', style: { ... }},
			{ type: 'video', title: '', description: '', url: '', style: { ... }},
			{ type: 'link', title: '', description: '', url: '', style: { ... }},
			{ type: 'svg', title: '', description: '', url: '', style: { ... }},
			{ type: 'pdf', title: '', description: '', url: '', style: { ... }},
			{ type: 'document', title: '', description: '', url: '', style: { ... }},
		]}
	},
	locale: 'da',
	{ ... }
}
```
