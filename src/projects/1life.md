---
title: 1Life
subtitle: Electronic medical record and provider application for One Medical
deployed_url: https://members.onemedical.com
status: contracted
created_at: 2015-04-08
kind: project
---
![One Medical Logo](./om.png)

At [One Medical](https://www.onemedical.com/careers/) I primarily worked on 1Life and [My One](/projects/my-one.html).
1Life is the electronic medical record and provider application used by the clinical teams.

### Contributions

- Researched and implemented a “paved path” for new services
- Migrated infrastructure to self-hosted, private networks in AWS
- Introduced improved continuous deployment and operations systems
- Identified and automated tasks affecting developer productivity
- Automated and simplified provider workflows and maintained EMR application
- Created and maintained several open-source projects, including [`devise_saml_authenticatable`](/projects/devise_saml_authenticatable.html)
- Integrated with clinical data providers and systems using HL7 and C-CDA

### Description

1Life has been developed alongside the rest of the company since it started several years ago.
It is written in Ruby on Rails and is deployed to Fargate on AWS.

There were several components to the project, but now most have been extracted to separate API client applications.

- API
- Admin application (partially extracted)
- Patient application (mostly extracted, see [My One](/projects/my-one.html))
- Provider application (extracted)

Separate projects contain clients that the API supports:

- Charting application (Angular)
- Patient application (Angular) (see [My One](/projects/my-one.html))
- Admin applications (React)
- Mobile clients
