---
title: devise_saml_authenticatable
subtitle: SAML authentication strategy for devise, an authentication plugin for Ruby on Rails
source_url: https://github.com/apokalipto/devise_saml_authenticatable
status: contracted
created_at: 2015-06-04
kind: project
---
![devise logo](./devise.png)

With one other engineer, I finished the basic functionality of [`devise_saml_authenticatable`](https://github.com/apokalipto/devise_saml_authenticatable), then offered continued support and maintenance for the project.

Our [internal application](/projects/1life.html) at [One Medical](http://www.onemedical.com/jobs/) needed single sign-on (SSO) to support better security practices for our providers and admins.
We already used [devise](https://github.com/plataformatec/devise) for authentication, so we looked for a SAML plugin.
All we found was an unfinished plugin, but we saw that it wouldn't take too much work to finish the functionality we needed.

We contacted the author, [Josef Sauter](https://github.com/apokalipto) and he gave us committer access.
Within a couple weeks, we'd finished enough functionality to call it 1.0.
We followed up with a couple more features, and since then have helped the community solve issues, add features, and keep up to date with Rails and devise updates.

The plugin uses [`ruby-saml`](https://github.com/onelogin/ruby-saml) to deal with parsing and verifying SAML responses, and generating SAML requests.
