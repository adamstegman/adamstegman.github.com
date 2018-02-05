---
title: elasticsearch-plugins-boshrelease
subtitle: "BOSH Release for Elasticsearch plugins: Shield and License"
source_url: https://github.com/onemedical/elasticsearch-plugins-boshrelease
status: contracted
created_at: 2016-02-23
ended_at: 2016-06-15
kind: project
---
![Elasticsearch logo](./elasticsearch.png)
I wrote a [BOSH](http://bosh.io) release to setup the Shield and License plugins for Elasticsearch on top of the logsearch BOSH release.

We deployed [Elasticsearch](https://www.elastic.co/products/elasticsearch) using the [`logsearch-boshrelease`](https://github.com/cloudfoundry-community/logsearch-boshrelease), but needed to support plugins such as [Shield](https://www.elastic.co/products/x-pack/security) and License.
Unlike simpler plugins, Shield and License require additional configuration, in Shield's case multiple steps of configuration.

I determined that plugin setup was out of scope for the logsearch release, so I needed to write my own.
Forking the release to add plugin support was an option, but I wanted to ensure we could still use upstream updates to Elasticsearch.
Plugin setup is mostly out-of-band with Elasticsearch setup, except the need to restart Elasticsearch.

Shield adds support for authorization and SSL to Elasticsearch, and we needed both features to keep patient information protected and encrypted at all times.
Authorization was fairly straightforward, but SSL was a bear.
Elastic support helped me figure out nuances of Java SSL setup and Elasticsearch's needs specifically.
