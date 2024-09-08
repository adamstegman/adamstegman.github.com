---
title: My One
subtitle: Patient web application for One Medical
deployed_url: https://members.onemedical.com
status: contracted
created_at: 2015-04-08
kind: project
---
![One Medical Logo](./om.png)

At [One Medical](https://www.onemedical.com/careers/) I primarily worked on My One and [1Life](/projects/1life.html).
My One is the web application that patients access to send secure messages, book appointments, and manage their account.

### Contributions

- Planned and executed a rewrite of membership lifecycle and billing systems
- Quickly built tools for enterprise clients to support a return to work during COVID-19
- Created a service to ingest enterprise client eligibility files
- Built and later updated enterprise patient registration

### Description

My One is an [Angular](https://angular.io) application that is an API client of [1Life](/projects/1life.html).
It started as part of the Rails application, but was later extracted to a new application and re-designed.

There are modules for each section of functionality.
The modules I worked on the most are for registration and surveys.

#### Enterprise Eligibility

The enterprise eligibility service is a Ruby service deployed to AWS Lambda.
It consumes eligibility files submitted by enterprise clients and publishes events that are consumed by [1Life](/projects/1life.html) to update its data store and membership records.
