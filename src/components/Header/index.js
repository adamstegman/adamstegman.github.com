import React from 'react';
import { Link } from 'gatsby';

import { ReactComponent as Atom } from '../../assets/atom.svg';
import Container from '../Container';
import NavList from '../NavList';
import resume from '../../assets/resume.pdf';
import styles from './index.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Atom className={styles.logo} />
        <Container>
          <hgroup>
            <h1 className={styles.h1}>
              <Link
                to="/"
                className={styles.headerLink}
              >
                {this.props.title}
              </Link>
            </h1>
            <h2 className={styles.h2}>Remote Staff Software Engineer</h2>
          </hgroup>
          <NavList>
            <Link to="/" className={styles.navLink}>About Me</Link>
            <a href="//blog.adamstegman.com" className={styles.navLink}>My Kind of Stupid (Blog)</a>
            <Link to="/projects" className={styles.navLink}>Projects</Link>
            <a href={resume} className={styles.navLink}>Résumé</a>
            <a href="//twitter.com/adamstegman" className={styles.navLink}>Twitter</a>
            <a href="//github.com/adamstegman" className={styles.navLink}>Github</a>
          </NavList>
        </Container>
      </header>
    );
  }
}

export default Header;
