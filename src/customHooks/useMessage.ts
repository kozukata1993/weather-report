import { useDispatch } from 'react-redux';
import { visible, invisible } from '../stores/message';

export const useMessage = (): ((text: string) => void) => {
  const dispatch = useDispatch();

  const displayMessage = (text: string) => {
    setTimeout(() => {
      dispatch(visible({ text }));
    }, 500);
    setTimeout(() => {
      dispatch(invisible());
    }, 5000);
  };

  return displayMessage;
};
