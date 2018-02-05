import React from 'react';
import Helmet from 'react-helmet';

import Container from '../components/Container';
import Projects from '../components/Projects';

export default ({ data }) => {
  const projectsByStatus = data.allMarkdownRemark.edges.reduce((projects, { node }) => {
    const project = node.fields.project
    if (!projects[project.status]) {
      projects[project.status] = []
    }
    projects[project.status].push(project);
    return projects;
  }, {});

  const sections = [];
  if (projectsByStatus.contracted) {
    sections.push(<Projects key="contracted" status="Contracted" projects={projectsByStatus.contracted} />);
  }
  if (projectsByStatus.deployed || projectsByStatus.development) {
    const personalProjects = (projectsByStatus.deployed || []).concat(projectsByStatus.development || []);
    sections.push(<Projects key="personal" status="Personal" projects={personalProjects} />);
  }
  if (projectsByStatus.retired) {
    sections.push(<Projects key="retired" status="Retired" projects={projectsByStatus.retired} />);
  }

  return (
    <Container>
      <Helmet title={"Projects - Adam Stegman"}></Helmet>
      <h2>Projects</h2>
      {sections.reduce((prev, current, index) => [prev, <hr key={index} />, current])}
    </Container>
  );
};

export const query = graphql`
  query ProjectsQuery {
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
  }
`;
