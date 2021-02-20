import React from 'react';

import { ReactComponent as Atom } from '../../assets/atom.svg';
import Container from '../Container';
import HorizontalLayout from '../HorizontalLayout';
import Projects from '../Projects';
import SortedProjects from '../../utils/SortedProjects';
import styles from './index.module.css';

class ProjectFooter extends React.Component {
  render() {
    const sortedProjects = new SortedProjects(this.props.allMarkdownRemark);
    const personalProjects = (sortedProjects.deployed || []).concat(sortedProjects.development || []);

    return (
      <footer className={styles.footer}>
        <Atom className={styles.logo} />
        <Container>
          <div className={styles.section}>
            <h2 className={styles.h2}>Contact</h2>
            <nav aria-label="secondary">
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <a href="//twitter.com/adamstegman" className={styles.navLink}>Follow me on Twitter</a>
                </li>
                <li className={styles.navItem}>
                  <a href="//github.com/adamstegman" className={styles.navLink}>Follow me on Github</a>
                </li>
                <li className={styles.navItem}>
                  <a href="//profiles.google.com/adam.stegman" rel="me" className={styles.navLink}>Google Profile</a>
                </li>
                <li className={styles.navItem}>
                  <a href="mailto:me@adamstegman.com" className={styles.navLink}>Email me</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2}>Projects</h2>
            <HorizontalLayout justifyContent="SpaceBetween">
              {sortedProjects.contracted && <Projects key="contracted" status="Contracted" projects={sortedProjects.contracted} styles={styles} />}
              {personalProjects && <Projects key="personal" status="Personal" projects={personalProjects} styles={styles} />}
              {sortedProjects.retired && <Projects key="retired" status="Retired" projects={sortedProjects.retired} styles={styles} />}
            </HorizontalLayout>
          </div>
        </Container>
      </footer>
    );
  }
}

export default ProjectFooter;
