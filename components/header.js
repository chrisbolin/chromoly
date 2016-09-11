import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import styles from './header.module.scss';
require('./header.headroom.scss');

export default () => (
  <Headroom>
    <div className={styles.header}>
      <Link to={prefixLink('/')}>
        → <span>Chromoly</span>
      </Link>
    </div>
  </Headroom>
);
