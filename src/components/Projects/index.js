import React from 'react';
import { Link } from 'gatsby';

import ProjectTimeRange from '../ProjectTimeRange';
import styles from './index.module.css';

class Projects extends React.Component {
  render() {
    const overrideStyles = Object.assign({}, styles, this.props.styles || {})
    return (
      <section className={overrideStyles.section}>
        <h3 className={overrideStyles.h3}>{this.props.status}</h3>
        <ol className={overrideStyles.projects}>
          {this.props.projects.map((project, index) => (
            <li key={index}>
              <article>
                <header>
                  <hgroup>
                    <h4 className={overrideStyles.h4}>
                      <Link to={project.slug}
                            className={overrideStyles.link}>
                        {project.title}
                      </Link>
                    </h4>
                    {project.subtitle && <h5 className={overrideStyles.h5}>{project.subtitle}</h5>}
                  </hgroup>
                </header>
                <footer className={overrideStyles.footer}>
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
