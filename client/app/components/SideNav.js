import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import gs from 'utils/gs';
import styles from './side-nav.scss';
import classnames from 'classnames';

const Label = ({ ...rest }) => (
  <p className={classnames(gs('menu-label'), styles.label)}>
    {rest.children}
  </p>
);

const List = ({ ...rest }) => (
  <ul className={classnames(gs('menu-list'), styles.list)}>
    {rest.children}
  </ul>
);

const NavLink = ({ ...rest }) => (
  <Link {...rest} activeClassName={styles.active} />
);

const SideNav = () => (
  <aside className={classnames(gs('menu'), styles.container)}>
    <Label>Logs</Label>
    <List>
      <li>
        <NavLink to="/logs/production">Production</NavLink>
      </li>
      <li>
        <NavLink to="/logs/stage">Stage</NavLink>
      </li>
      <li>
        <NavLink to="/logs/test">Test</NavLink>
      </li>
    </List>
    <Label>Spy Users</Label>
    <List>
      <li>
        <a href="#">Production</a>
      </li>
      <li>
        <a href="#">Stage</a>
      </li>
      <li>
        <a href="#">Test</a>
      </li>
    </List>
  </aside>
);

export default SideNav;
