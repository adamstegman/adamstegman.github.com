import React from 'react';

import { ReactComponent as Atom } from '../../assets/atom.svg';
import Container from '../Container';
import HorizontalLayout from '../HorizontalLayout';
import Projects from '../Projects';
import SortedProjects from '../../utils/SortedProjects';
import { footer, h2, h3, h4, h5, link, logo, navItem, navLink, navList, section } from './index.module.css';

class ProjectFooter extends React.Component {
  render() {
    const sortedProjects = new SortedProjects(this.props.allMarkdownRemark);
    const personalProjects = (sortedProjects.deployed || []).concat(sortedProjects.development || []);
    const styles = { footer, h2, h3, h4, h5, link, logo, navItem, navLink, navList, section };

    return (
      <footer className={footer}>
        <Atom className={logo} />
        <Container>
          <div className={section}>
            <h2 className={h2}>Contact</h2>
            <nav aria-label="secondary">
              <ul className={navList}>
                <li className={navItem}>
                  <a href="//twitter.com/adamstegman" className={navLink}>Follow me on Twitter</a>
                </li>
                <li className={navItem}>
                  <a href="//github.com/adamstegman" className={navLink}>Follow me on Github</a>
                </li>
                <li className={navItem}>
                  <a href="//profiles.google.com/adam.stegman" rel="me" className={navLink}>Google Profile</a>
                </li>
                <li className={navItem}>
                  <a href="mailto:me@adamstegman.com" className={navLink}>Email me</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={section}>
            <h2 className={h2}>Projects</h2>
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
