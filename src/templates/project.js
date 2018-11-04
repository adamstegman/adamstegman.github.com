import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import Layout from '../components/ProjectLayout';
import ProjectStatus from '../components/ProjectStatus';
import ProjectTimeRange from '../components/ProjectTimeRange';
import styles from './project.module.css';

export default ({ data }) => {
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
        <Helmet title={`${project.title}: ${project.subtitle} - ${data.site.siteMetadata.title}`}></Helmet>
        <article>
          <header className={styles.header}>
            <hgroup className={styles.headerText}>
              <h2>{title}</h2>
              {project.subtitle && <h3 className={styles.subtitle}>{project.subtitle}</h3>}
            </hgroup>
            <ProjectStatus status={project.status}></ProjectStatus>
            <ProjectTimeRange project={project}></ProjectTimeRange>
            {project.sourceUrl && <p className={styles.headerText}>Open source. <a href={project.sourceUrl}>Code available here</a>.</p>}
          </header>
          <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></section>
        </article>
      </Container>
    </Layout>
  );
}

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
