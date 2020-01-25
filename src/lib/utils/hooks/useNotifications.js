import { useSnackbar } from 'notistack';

export default function useNotifications() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();  
  return ({
    enqueueNotification: enqueueSnackbar,
    closeNotification: closeSnackbar,    
  })
}
