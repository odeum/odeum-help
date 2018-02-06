# ODEUM Help

* Global Help Index for all connected apps
* Should long term have its own ticketing system (issue tracker) (Future)
* Ability to integrate with Slack through ODEUM Slack Service (Future)


## ODEUM Help
ODEUM Code will require a help client and a help server. The help server service will be integrated through a client React Wrapper component in ODEUM Code (Web App framework) and later in ODEUM Code Native (Mobile App framework). 


## ODEUM Help Server
ODEUM Code Apps has a demand for a service (server) that can be integrated in our open source ODEUM Code App framework. 
This server is a service that exhibits help texts and help content for Web Apps who has joined the service. A context sensitive help service. 

The server is a service (API) that exhibits and offer inline help and content for ODEUM Code Web Apps connected to this service. A context sensitive help displayed through a pop-up overlay by activating the "Help" button in the lower right corner of the footer in an  ODEUM Code Web App. 

## Problem
A Web App developed with ODEUM Code can be any arbitrary web app written in React using the ODEUM Code App framework as a platform for its visual primities and business logic. An ODEUM Code Web App is composed of a number of React components, and some of these components are workspace components that needs context sensitive help connected. The component will wrap a unique ID from a database thus getting access to a specific help entry from a central help repository returning content to be visualized in the web app.

#### Following technologies will be used to solve the problem:

* A React wrapper component which couples the visual workspace with an index from a server. (ReactJS)
* A server API that exhibits indexed help items. (PHP)
* A database containing an index of apps that have their own indexes with help items (MySQL)
* A simple ODEUM React Form to create and edit help items for an app. Here you create the content that is going to be shown in the context sensitive help in the ODEUM Code Web App. (ReactJS)

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
	'1234': {
		app_id: 1,
		help_id: 1234,
		locale_content: {
			'en': {
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
			'da': { ... }
		}
	},
	'5678': {
		app_id: 1,
		help_id: 5678,
		locale_content: {
			'en': {
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
			'da': { ... }
		}
	}
}

```
