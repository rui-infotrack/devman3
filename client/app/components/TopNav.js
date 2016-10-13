import React from 'react';
import gs from 'utils/gs';
import classnames from 'classnames';
import styles from './top-nav.scss';

const TopNav = () => (
  <nav className={classnames(gs('nav'), styles.container)}>
    <div className={gs('nav-left')}>
      <a className={classnames(gs('nav-item', 'is-brand'))} href="#">
        Hello World
      </a>
    </div>
  </nav>
);

export default TopNav;
