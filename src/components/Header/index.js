import React from 'react';
import Link from 'gatsby-link';

import Atom from '../../assets/atom.svg';
import Container from '../Container';
import resume from '../../assets/resume.pdf';
import styles from './index.module.css';

const Header = () => (
  <header className={styles.header}>
    <Atom className={styles.logo} />
    <Container>
      <hgroup>
        <h1 className={styles.h1}>
          <Link
            to="/"
            className={styles['header-link']}
          >
            Adam Stegman
          </Link>
        </h1>
        <h2 className={styles.h2}>Senior Software Engineer</h2>
      </hgroup>
      <nav>
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <Link to="/" className={styles['nav-link']}>About Me</Link>
          </li>
          <li className={styles['nav-item']}>
            <a href="//blog.adamstegman.com" className={styles['nav-link']}>My Kind of Stupid (Blog)</a>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/projects/" className={styles['nav-link']}>Projects</Link>
          </li>
          <li className={styles['nav-item']}>
            <a href={resume} className={styles['nav-link']}>Résumé</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="//twitter.com/adamstegman" className={styles['nav-link']}>Twitter</a>
          </li>
          <li className={styles['nav-item']}>
            <a href="//github.com/adamstegman" className={styles['nav-link']}>Github</a>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
