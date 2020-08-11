import React from 'react';
import './layout.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default Layout;
