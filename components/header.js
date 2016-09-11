import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import styles from './header.module.scss';

export default () => (
  <div className={styles.header}>
    <Link to={prefixLink('/')}>
      → Chromoly
    </Link>
  </div>
);
