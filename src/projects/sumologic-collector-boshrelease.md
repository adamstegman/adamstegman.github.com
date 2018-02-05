---
title: sumologic-collector-boshrelease
subtitle: BOSH Release for Sumo Logic Collector
source_url: https://github.com/onemedical/sumologic-collector-boshrelease
status: contracted
created_at: 2016-02-23
ended_at: 2017-05-05
kind: project
---
![Sumo Logic logo](./sumologic.png)

To aggregate logs from BOSH-deployed machines, I packaged a BOSH release of the [Sumo Logic](https://www.sumologic.com) collector.

We already used Sumo Logic to aggregate our logs, so when we began deploying Elasticsearch with [BOSH](http://bosh.io), we wanted to aggregate those logs too.
Writing a BOSH release is how software is packaged for BOSH, so I automated the Linux collector setup in the packaging script.

Later I added configuration to support a hosted collector so we could point syslog sources to a host that would forward logs to Sumo Logic.
