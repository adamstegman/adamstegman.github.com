import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/ProjectLayout';
import Projects from '../components/Projects';
import SortedProjects from '../utils/SortedProjects';

export default ({ data }) => {
  const sortedProjects = new SortedProjects(data.allMarkdownRemark);
  const personalProjects = (sortedProjects.deployed || []).concat(sortedProjects.development || []);

  return (
    <Layout>
      <Container>
        <Helmet title={`Projects - ${data.site.siteMetadata.title}`}></Helmet>
        <h2>Projects</h2>
        <Projects key="contracted" status="Contracted" projects={sortedProjects.contracted} />
        <hr />
        <Projects key="personal" status="Personal" projects={personalProjects} />
        <hr />
        <Projects key="retired" status="Retired" projects={sortedProjects.retired} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { kind: { eq: "project" } } }, sort: { fields: [frontmatter___ended_at], order: DESC }) {
      edges {
        node {
          fields {
            project {
              slug
              title
              subtitle
              status
              createdAtTimestamp: createdAt
              createdAt(formatString: "MMMM YYYY")
              endedAtTimestamp: endedAt
              endedAt(formatString: "MMMM YYYY")
              deployedUrl
              sourceUrl
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
