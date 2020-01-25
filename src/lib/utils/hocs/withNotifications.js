import { withSnackbar } from 'notistack';

const withNotifications = (WrappedComponent) => (
  withSnackbar(WrappedComponent)
);

export default withNotifications;
