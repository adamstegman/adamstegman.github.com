import React from 'react';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import profilePic from '../assets/adamstegman.jpg';
import styles from './index.module.css';

const IndexPage = ({ data }) => (
  <Container>
    <Helmet title={`About Me - ${data.site.siteMetadata.title}`}></Helmet>
    <h2>About Me</h2>
    <section>
      <img src={profilePic} className={styles['profile-pic']} width="200" alt="Adam Stegman" />
      <p>
        I work for <a href="http://www.onemedical.com">One Medical</a> in San Francisco.
        I got my BS in CS at <a href="http://www.k-state.edu/">Kansas State University</a> and graduated in 2009.
        I've worked in several languages, but I enjoy <a href="http://www.ruby-lang.org/">Ruby</a> the most currently, with interest in the simplicity of <a href="https://golang.org">Go</a>.
        I like to work on distributed systems using agile and XP practices.
      </p>
    </section>
    <section>
      <p>
        Most of my web work has been in Ruby on Rails, and I enjoy the core web technologies of HTML, CSS, and JavaScript.
        I also gravitate to the other side of the stack, setting up repeatable, consistent server environments that are fully automated and continuously deployed.
        I've done that using devops tools like <a href="http://bosh.io">BOSH</a>, <a href="https://www.packer.io">Packer</a>, and <a href="https://www.chef.io">Chef</a>,
          deploying systems like <a href="https://www.cloudfoundry.org">Cloud Foundry</a> and <a href="https://www.elastic.co/products/elasticsearch">Elasticsearch</a> to <a href="https://aws.amazon.com">AWS</a>.
      </p>
      <p>
        I appreciate clever systems architecture and operations-aware engineering.
        My favorite approach to work is dipping my fingers in every pie and helping co-workers solve their problems.
        Additionally, I love learning, but mostly applying clever, cleaner ways to do things, especially when I can delete code.
      </p>
      <p>
        I'm an evangelist for documentation and best practices.
        I enjoy ensuring things are complete&mdash;documented, tested, released, and supported.
        The opposite rubs me the wrong way&mdash;a lack of documentation, hard-to-find resources, or ugly code.
        I don't like to let bad code sit and try to keep code I touch cleaner than how I found it.
      </p>
      <p>
        I highly value companies that buy into agile at every level of the business. <a href="https://www.youtube.com/watch?v=Mpsn3WaI_4k"><q>Agile at scale requires trust at scale,</q></a> and that is very hard to achieve.
      </p>

      <h3>Preferences</h3>

      <p>
        I use things that enable me, like a clean, fast text editor and the terminal.
        That means tools like Rake and BOSH help me accomplish my work by automating repetitive tasks.
      </p>
      <p>
        Configuration must be avoided as much as possible.
      </p>

      <h3>A little history</h3>

      <p>
        I started working at <a href="http://www.onemedical.com/jobs/">One Medical</a> in 2015 on the electronic medical record and provider application, <a href="/projects/1life.html">1life</a>.
        Lately I've been working on improving our clinical team workflows.
        Previous to that I helped migrate much of our infrastructure from Heroku and hosted services to Amazon Web Services.
        The first projects I worked on at One Medical were around clinical compliance with new standards and member registration.
      </p>
      <p>
        In 2013 I accepted an offer from <a href="http://www.pivotallabs.com/">Pivotal Labs</a> and moved to the San Francisco bay area.
        After a few months of client projects I started work on <a href="http://cloudfoundry.org/index.html">Cloud Foundry</a>, where I worked on services, BOSH, and operations.
      </p>
      <p>
        Previously, I lived in Kansas City and worked for <a href="http://www.cerner.com/">Cerner</a> for five years writing web applications and services at every level of the stack.
        When I started, I helped build and maintain the <a href="https://store.cerner.com">Cerner Store</a> for a couple years.
        Then I moved to writing services focused on clinical search for a new, distributed architecture.
        My final year at Cerner was spent working to rapidly prototype and build a suite of web applications for a new initiative.
      </p>
      <p>
        I started with simple MUD-like dungeons written in QBasic when I was a child and moved on to more complex, but useful, .NET applications in college.
        New ideas and projects excite me to no end, though it's always been challenging to drive a project through to a polished end-state.
      </p>
    </section>
  </Container>
);

export default IndexPage;

export const query = graphql`
  query AboutMeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
