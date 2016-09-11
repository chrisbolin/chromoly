import React from 'react';

import styles from './post.module.scss';

export default ({post}) => (
  <div className={styles[post.theme]}>
    <header>
      <h1>{post.title}</h1>
      <h5>{post.author}</h5>
    </header>
    <article dangerouslySetInnerHTML={{ __html: post.body }} />
  </div>
);
