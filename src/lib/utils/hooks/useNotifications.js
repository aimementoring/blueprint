import { useSnackbar } from 'notistack';

export default () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return {
    enqueueNotification: enqueueSnackbar,
    closeNotification: closeSnackbar,
  };
}
