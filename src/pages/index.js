import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/Layout';
import profilePic from '../assets/adamstegman.jpg';
import { profilePic as profilePicStyles, smartQuotes } from './index.module.css';

const IndexPage = ({ data }) => (
  <Layout>
    <Container>
      <Helmet title={`About Me - ${data.site.siteMetadata.title}`} />
      <main>
        <h2>About Me</h2>
        <section>
          <img src={profilePic} className={profilePicStyles} width="200" alt="Adam Stegman" />
          <p>
            I work remotely as a Staff Software Engineer for <a href="https://www.onemedical.com">One Medical</a> from Fort Worth, Texas.
            I got my BS in Computer Science at <a href="https://www.k-state.edu/">Kansas State University</a> and graduated in 2009.
            I enjoy working in <a href="https://www.ruby-lang.org/">Ruby</a> and TypeScript, but I&#8217;ve also worked in other languages including HTML/CSS, JavaScript, Go, and Java.
            I like to work on distributed systems using agile and XP practices.
          </p>
        </section>
        <section>
          <p>
            Most of my web work has been on the backend, often in Ruby on Rails, and I enjoy the core web technologies of HTML, CSS, and JavaScript.
            I also gravitate to the other side of the stack, setting up repeatable, consistent server environments that are fully automated and continuously deployed.
            Most recently, that&#8217;s been deploying small services to <a href="https://aws.amazon.com/lambda/">AWS Lambda</a> and <a href="https://aws.amazon.com/fargate/">AWS Fargate</a> using <a href="https://www.terraform.io">Terraform</a> and <a href="https://aws.amazon.com/cdk/">CDK</a>.
            I&#8217;ve also appreciated the philosophy of other devops tools like <a href="https://bosh.io">BOSH</a>, <a href="https://www.packer.io">Packer</a>, and <a href="https://www.chef.io">Chef</a>.
            When working on ops teams, I&#8217;ve automated and deployed services like <a href="https://www.cloudfoundry.org">Cloud Foundry</a> and <a href="https://www.elastic.co/elasticsearch/">Elasticsearch</a> to <a href="https://aws.amazon.com">AWS</a>.
          </p>
          <p>
            I appreciate reliable systems architecture and operations-aware engineering.
            My favorite approach to work is dipping my fingers in every pie and helping co-workers solve their problems, especially navigating organizational challenges.
            On my own projects, I love learning about new problems and tools, and applying cleaner ways to do things, especially when I can delete code.
          </p>
          <p>
            I&#8217;m an evangelist for knowledge sharing and best practices.
            I enjoy ensuring things are complete&mdash;documented, tested, released, and supported.
            The opposite rubs me the wrong way&mdash;unclear ownership, hard-to-find answers, or a lack of empathy.
            Those are the problems I want to dive into and fix.
          </p>
          <p className={smartQuotes}>
            I highly value companies that buy into agile at every level of the business. <q>Agile at scale requires trust at scale,</q> and that is very hard to achieve.
          </p>

          <h3>A little history</h3>

          <p>
            I started working at One Medical in 2015 on the electronic medical record and provider application, <a href="/projects/1life.html">1life</a>.
            Lately I&#8217;ve been working on supporting our developers, streamlining and automating their workflows.
            Before that I supported our enterprise clients, especially with COVID-19 response, clinical team workflows, and helped migrate much of our infrastructure from Heroku and hosted services to Amazon Web Services.
            The first projects I worked on at One Medical were around clinical compliance with new standards and member registration.
          </p>
          <p>
            In 2013 I accepted an offer from Pivotal Labs and moved to the San Francisco Bay Area.
            After a few months of client projects I started work on <a href="https://www.cloudfoundry.org">Cloud Foundry</a>, where I worked on services, BOSH, and operations.
          </p>
          <p>
            Previously, after college, I lived in Kansas City and worked for <a href="https://www.cerner.com/">Cerner</a> for five years writing web applications and services at every level of the stack.
            When I started, I helped build and maintain the <a href="https://store.cerner.com">Cerner Store</a> for a couple years.
            Then I moved to writing services focused on clinical search for a new, distributed architecture.
            My final year at Cerner was spent working to rapidly prototype and build a suite of web applications for a new initiative.
          </p>
          <p>
            I started with simple MUD-like dungeons written in QBasic when I was a child and moved on to more complex, but useful, .NET applications in college.
            New ideas and personal projects are exciting, though it&#8217;s always been challenging to drive a side project through to a polished end-state.
          </p>
        </section>
      </main>
    </Container>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
