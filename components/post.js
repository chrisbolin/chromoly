import React from 'react';

import styles from './post.module.scss';

export default ({post}) => (
  <div className={styles['issue-' + post.issue]}>
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.body }} />
  </div>
);
