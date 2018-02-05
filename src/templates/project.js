import React from 'react';
import Helmet from 'react-helmet';

import Container from '../components/Container';
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
    <Container>
      <Helmet title={`${project.title}: ${project.subtitle} - Adam Stegman`}></Helmet>
      <article>
        <header className={styles.header}>
          <hgroup className={styles['header-text']}>
            <h2>{title}</h2>
            {project.subtitle && <h3 className={styles.subtitle}>{project.subtitle}</h3>}
          </hgroup>
          <ProjectStatus status={project.status}></ProjectStatus>
          <ProjectTimeRange project={project}></ProjectTimeRange>
          {project.sourceUrl && <p className={styles['header-text']}>Open source. <a href={project.sourceUrl}>Code available here</a>.</p>}
        </header>
        <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></section>
      </article>
    </Container>
  );
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
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
  }
`;
