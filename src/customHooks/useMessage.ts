import { useDispatch } from 'react-redux';
import { visible, invisible } from '../stores/message';

export const useMessage = (): ((text: string, color: string) => void) => {
  const dispatch = useDispatch();

  const displayMessage = (text: string, color: string) => {
    setTimeout(() => {
      dispatch(visible({ text, color }));
    }, 500);
    setTimeout(() => {
      dispatch(invisible());
    }, 5000);
  };

  return displayMessage;
};
