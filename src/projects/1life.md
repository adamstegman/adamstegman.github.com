---
title: 1Life
subtitle: Electronic medical record and provider application for One Medical
deployed_url: https://members.onemedical.com
status: contracted
created_at: 2015-04-08
kind: project
---
![One Medical Logo](./om.png)

At [One Medical](http://www.onemedical.com/jobs/) I worked on 1Life, the electronic medical record and provider application used by the clinical teams.

### Contributions

- Introduced improved continuous deployment and operations systems
- Migrated infrastructure to self-hosted, private networks in AWS
- Automated and simplified provider workflows and maintained EMR application
- Created and maintained several open-source projects:
    - [`devise_saml_authenticatable`](devise_saml_authenticatable.html)
    - [`sumologic-collector-boshrelease`](sumologic-collector-boshrelease.html)
    - [`datadog-agent-boshrelease`](datadog-agent-boshrelease.html)
    - [`elasticsearch-plugins-boshrelease`](elasticsearch-plugins-boshrelease.html)
- Integrated with clinical data providers and systems using HL7 and C-CDA

### Description

1Life has been developed alongside the rest of the company since it started several years ago.
It is written in Ruby on Rails and is deployed to [Elastic Beanstalk on Amazon Web Services](https://aws.amazon.com/elasticbeanstalk/).

There are several components to the project.

- API
- Provider application
- Admin application
- Patient application

There is a browser client for the API embedded in the provider application.
Separate projects contain additional clients that the API supports:

- Charting application (Angular.js)
- Secure messaging application (Angular)
- Mobile clients
