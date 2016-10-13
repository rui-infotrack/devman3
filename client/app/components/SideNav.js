import React from 'react';
import gs from 'utils/gs';
import styles from './side-nav.scss';
import classnames from 'classnames';

const SideNav = () => (
  <aside className={classnames(gs('menu'), styles.container)}>
    <p className={gs('menu-label')}>
      General
    </p>
    <ul className={gs('menu-list')}>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Customers</a></li>
    </ul>
    <p className={gs('menu-label')}>
      Administration
    </p>
    <ul className={gs('menu-list')}>
      <li><a href="#">Team Settings</a></li>
      <li>
        <a className={gs('is-active')} href="#">Manage Your Team</a>
        <ul>
          <li><a href="#">Members</a></li>
          <li><a href="#">Plugins</a></li>
          <li><a href="#">Add a member</a></li>
        </ul>
      </li>
      <li><a href="#">Invitations</a></li>
      <li><a href="#">Authentication</a></li>
    </ul>
    <p className={gs('menu-label')}>
      Transactions
    </p>
    <ul className={gs('menu-list')}>
      <li><a href="#">Payments</a></li>
      <li><a href="#">Transfers</a></li>
      <li><a href="#">Balance</a></li>
    </ul>
  </aside>
);

export default SideNav;
