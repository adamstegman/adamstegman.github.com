---
title: BOSH
subtitle: An open source tool chain for release engineering, deployment and lifecycle management of large scale distributed services
deployed_url: http://bosh.io
source_url: https://github.com/cloudfoundry/bosh
status: contracted
created_at: 2014-02-01
ended_at: 2014-10-31
kind: project
---
![BOSH logo](./bosh.png)

After working on client projects for my first few months at Pivotal Labs, I was asked to work on BOSH.
BOSH had been started at Google and VMware and was still actively developed at Pivotal.

### Contributions

I helped the BOSH team do some rewrites of parts of the codebase that were not performing well and needed to be rethought for new goals.
We also worked on a bunch of new features and maintenance.
We did a lot of work on our CI pipeline to keep this complex software with multiple targets stable for our users.

### Description

BOSH consists of many components, but primarily:

- a director service that coordinates actions involving the distributed systems it manages
- an agent that runs on every VM BOSH creates via its custom machine images
- a messaging system ([NATS](http://nats.io)) enabling communication between all the components of the system

BOSH is written mostly in Ruby, with some components in Go.
It makes use of several infrastructure services: AWS, vSphere, and OpenStack in particular.
