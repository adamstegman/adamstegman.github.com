import React from 'react';
import Link from 'gatsby-link';

import ProjectTimeRange from '../ProjectTimeRange';
import styles from './index.module.css';

class Projects extends React.Component {
  render() {
    return (
      <section>
        <h3>{this.props.status}</h3>
        <ol className={styles.projects}>
          {this.props.projects.map((project, index) => (
            <li key={index}>
              <article>
                <header>
                  <hgroup>
                    <h4 className={styles.h4}>
                      <Link to={project.slug}>{project.title}</Link>
                    </h4>
                    {project.subtitle && <h5 className={styles.h5}>{project.subtitle}</h5>}
                  </hgroup>
                </header>
                <footer className={styles.footer}>
                  <ProjectTimeRange project={project}></ProjectTimeRange>
                </footer>
              </article>
            </li>
          ))}
        </ol>
      </section>
    );
  }
}
export default Projects;
