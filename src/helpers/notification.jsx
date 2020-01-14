import { toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../stylesheets/notification.module.css';

toast.configure({
  autoClose: 8000,
  pauseOnFocusLoss: false,
});

const options = {
  position: toast.POSITION.TOP_CENTER,
  transition: Flip,
  draggablePercent: 60,
};

export const error = message => {
  return toast.error(message, {
    ...options,
    toastId: 1,
    className: styles.error,
    progressClassName: styles.bar,
  });
};

export const alert = message => {
  return toast.success(message, {
    ...options,
    toastId: 2,
    className: styles.success,
    progressClassName: styles.bar,
  });
};
