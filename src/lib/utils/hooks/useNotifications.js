import { useSnackbar } from 'notistack';

export function useNotifications() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();  
  return ({
    enqueueNotification: enqueueSnackbar,
    closeNotification: closeSnackbar,    
  })
}
