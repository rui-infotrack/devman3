import React, { PropTypes } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import styles from './layout.scss';
import gs from 'utils/gs';
import classnames from 'classnames';

const Layout = ({ children }) => (
  <div>
    <TopNav />
    <SideNav />
    <div className={classnames(gs('container', 'is-fluid'), styles.content)}>
      <div className={classnames(gs('card', 'is-fullwidth'))}>
        <div className={gs('card-content')}>
          {children}
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
