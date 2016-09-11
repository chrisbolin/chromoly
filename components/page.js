import React from 'react';
import Header from './header';
import styles from './page.module.scss';

export default ({location, children}) => {
  const showHeader = (location.pathname !== "/");
  return (
    <div className={"page " + styles.page}>
      {showHeader ? <Header/> : null}
      {children}
    </div>
  );
};
