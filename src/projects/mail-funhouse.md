---
title: Mail Funhouse
subtitle: Mock SMTP server for catching mail
status: contracted
created_at: 2011-05-01
ended_at: 2011-08-31
kind: project
---
Mail Funhouse was a mail catcher written to test email delivery functionality in a staging environment.

Its core event loop consisted of a state machine driven by a TCP server and was written in Ruby.
It stored emails sent and displayed them on a simple web application.
Emails were indexed for search using a simple Solr index.
