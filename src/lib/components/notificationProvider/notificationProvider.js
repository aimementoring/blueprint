import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';

const NotificationProvider = ({ children }) => (
  <SnackbarProvider>{children}</SnackbarProvider>
);

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotificationProvider;
