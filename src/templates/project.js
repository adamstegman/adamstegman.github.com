import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/ProjectLayout';
import ProjectStatus from '../components/ProjectStatus';
import ProjectTimeRange from '../components/ProjectTimeRange';
import { header, headerText, subtitle } from './project.module.css';

const project = ({ data }) => {
  const project = data.markdownRemark.fields.project;
  let title;
  if (project.deployedUrl) {
    title = <a href={project.deployedUrl}>{project.title}</a>
  } else {
    title = project.title
  }
  return (
    <Layout>
      <Container>
        <Helmet title={`${project.title}: ${project.subtitle} - ${data.site.siteMetadata.title}`} />
        <main>
          <header className={header}>
            <hgroup className={headerText}>
              <h2>{title}</h2>
              {project.subtitle && <h3 className={subtitle}>{project.subtitle}</h3>}
            </hgroup>
            <ProjectStatus status={project.status}></ProjectStatus>
            <ProjectTimeRange project={project}></ProjectTimeRange>
            {project.sourceUrl && <p className={headerText}>Open source. <a href={project.sourceUrl}>Code available here</a>.</p>}
          </header>
          <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></section>
        </main>
      </Container>
    </Layout>
  );
}
export default project;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { project: { slug: { eq: $slug } } }) {
      html
      fields {
        project {
          title
          subtitle
          status
          createdAtTimestamp: createdAt
          createdAt(formatString: "MMMM YYYY")
          deployedUrl
          endedAtTimestamp: endedAt
          endedAt(formatString: "MMMM YYYY")
          sourceUrl
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
