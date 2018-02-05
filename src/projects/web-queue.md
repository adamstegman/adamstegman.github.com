---
title: Web Queue
subtitle: Better Netflix queue management on any device
status: retired
created_at: 2010-08-22T03:20Z
ended_at: 2011-08-08T04:35:57Z
kind: project
---
Web Queue was to be a web application that enabled faster, better queue management than what's made available by [Netflix](http://netflix.com/).

I stopped working on Web Queue in 2011 in favor of other projects.

### Purpose

Netflix does not offer good queue management from mobile devices.
The web interface is clearly not meant for mobile consumption and the iOS app is slow to the point of frustration.

A simple, responsive web application can offer much more flexibility while remaining fast enough to get out of the user's way.

Unfortunately, this will only work for instant queue management. Netflix has removed disc queue API access.

### Status

#### Working on API access

The instant queue is available, but management is not in place.

Title search works but has no pagination.

Currently, I am learning how to use the Netflix API.
I can retrieve objects based on both signed and protected calls, and am working on parsing them into meaningful objects and making them available to the user.

After basic calls are in place, a basic user interface using only HTML will be the next step.
After that I will layer on styles using media queries for an ultimately responsive design.

### Usage

#### Queue

##### GET /queue (TODO)

The instant queue. This is the launchpad and will allow the user to move or remove items in their instant queue.

#### Search

##### GET /search (TODO)

Searches Netflix's entire catalog.

##### GET /search/titles (TODO)

Searches Netflix's title catalog.

##### GET /search/people (TODO)

Searches Netflix's people catalog.

### Architecture

Web Queue is written as a Ruby on Rails web application.
It uses a SQLite database to store OAuth credentials for each user.

#### Netflix

The Netflix interaction is all in lib/netflix and is meant to serve as an independent library.
It may eventually be spun off into a gem if I take the time to make it full-featured.

##### Configuration

`config/netflix.yml` contains Netflix configuration.
The key configuration values are `consumer_key` and `consumer_secret`.
The others relate to Netflix API endpoints and will likely remain the same for a while.

##### Netflix::Users

Resources in this namespace belong to a specific user and may not be retrieved or modified without user authorization.

###### Netflix::Users::Queues (TODO)

A utility class that constructs a queue (see next section) after retrieving its details from Netflix.

###### Netflix::Users::Queue (TODO)

A queue, either disc, instant, or saved.
Contains a list of the titles in the queue and handles interaction with Netflix for changes to itself.

##### Netflix::Catalog

Catalog resources are available to an application without user authorization and include things like search and people or title information.

###### Netflix::Catalog::Titles

A utility class that sends a search request to Netflix and returns a list of titles (see next section).

###### Netflix::Catalog::Title

A title in Netflix's catalog. Could be a movie or TV series.

###### Netflix::Catalog::People (TODO)

A utility class that sends a search request to Netflix and returns a list of people (see next section).

###### Netflix::Catalog::Person (TODO)

A person in Netflix's catalog.

##### Netflix::Timestamp (TODO)

Retrieves the current timestamp according to Netflix.

##### Netflix::Config

A helper module for retrieving configuration for the library.

##### Netflix::Oauth

Protected resources are retrieved through the Netflix::Oauth class.
It handles formatting and signing of the request.

###### Netflix::Oauth.protected_get

Gets a protected resource; that is, a resource only accessible with authorized credentials on behalf of a user.
Requires the user id, the user's access token, and the user's access token secret.

###### Netflix::Oauth.signed_get

Gets a resource that requires authentication by the application.
These resources are not on behalf of a user and do not require user authorization.
